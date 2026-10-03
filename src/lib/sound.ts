/**
 * Interface sounds, synthesised with Web Audio — no audio files to download.
 * Browsers only allow audio after the visitor's first click or tap, so nothing plays before that.
 */

export type SoundName = 'tap' | 'tick' | 'pop' | 'whisk'

let ctx: AudioContext | undefined
let master: GainNode | undefined
let noise: AudioBuffer | undefined

/** Created lazily, inside a user gesture, so browsers allow it to start. */
function audio(): { ctx: AudioContext; out: GainNode } {
  if (!ctx || !master) {
    ctx = new AudioContext()
    master = ctx.createGain()
    master.gain.value = 0.6
    master.connect(ctx.destination)
  }
  if (ctx.state === 'suspended') void ctx.resume()
  return { ctx, out: master }
}

interface Tone {
  type: OscillatorType
  from: number
  to?: number
  duration: number
  gain: number
  delay?: number
}

/** A pitched blip with a fast attack and exponential decay. */
function tone({ type, from, to, duration, gain, delay = 0 }: Tone): void {
  const { ctx, out } = audio()
  const start = ctx.currentTime + delay
  const end = start + duration

  const osc = ctx.createOscillator()
  osc.type = type
  osc.frequency.setValueAtTime(from, start)
  if (to) osc.frequency.exponentialRampToValueAtTime(to, end)

  const env = ctx.createGain()
  env.gain.setValueAtTime(0.0001, start)
  env.gain.exponentialRampToValueAtTime(gain, start + 0.004)
  env.gain.exponentialRampToValueAtTime(0.0001, end)

  osc.connect(env).connect(out)
  osc.start(start)
  osc.stop(end + 0.02)
}

interface Noise {
  from: number
  to?: number
  duration: number
  gain: number
  q?: number
}

/** A burst of band-passed noise; sweeping the band gives an airy whoosh. */
function hiss({ from, to, duration, gain, q = 1.2 }: Noise): void {
  const { ctx, out } = audio()
  const start = ctx.currentTime
  const end = start + duration

  if (!noise) {
    noise = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate)
    const data = noise.getChannelData(0)
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
  }

  const source = ctx.createBufferSource()
  source.buffer = noise

  const band = ctx.createBiquadFilter()
  band.type = 'bandpass'
  band.Q.value = q
  band.frequency.setValueAtTime(from, start)
  if (to) band.frequency.exponentialRampToValueAtTime(to, end)

  const env = ctx.createGain()
  env.gain.setValueAtTime(0.0001, start)
  env.gain.exponentialRampToValueAtTime(gain, start + duration * 0.3)
  env.gain.exponentialRampToValueAtTime(0.0001, end)

  source.connect(band).connect(env).connect(out)
  source.start(start)
  source.stop(end + 0.02)
}

const sounds: Record<SoundName, () => void> = {
  // Press: a soft, low knock with a tiny click on top.
  tap() {
    tone({ type: 'sine', from: 420, to: 300, duration: 0.07, gain: 0.16 })
    hiss({ from: 3200, duration: 0.018, gain: 0.04, q: 4 })
  },
  // Hover: barely there, so sweeping across a list stays pleasant.
  tick() {
    tone({ type: 'sine', from: 1900, duration: 0.025, gain: 0.018 })
  },
  // Success: two quick rising notes.
  pop() {
    tone({ type: 'triangle', from: 620, to: 880, duration: 0.07, gain: 0.08 })
    tone({ type: 'sine', from: 930, to: 1320, duration: 0.1, gain: 0.06, delay: 0.06 })
  },
  // Movement: a short airy sweep for the carousel.
  whisk() {
    hiss({ from: 700, to: 2800, duration: 0.14, gain: 0.07 })
  },
}

let lastTick = 0

export function playSound(name: SoundName): void {
  // Before any click or tap, an AudioContext can't start (and warns), so stay quiet.
  if (navigator.userActivation && !navigator.userActivation.hasBeenActive) return
  // Hover ticks fire in bursts when sweeping across rows; keep them spaced out.
  if (name === 'tick') {
    const now = performance.now()
    if (now - lastTick < 60) return
    lastTick = now
  }
  try {
    sounds[name]()
  } catch {
    // Web Audio unavailable: stay silent.
  }
}
