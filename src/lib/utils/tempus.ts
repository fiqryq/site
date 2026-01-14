type Callback = (now?: number, deltaTime?: number) => void;

class Raf {
  callbacks: { callback: Callback; priority: number }[] = [];
  now: number = performance.now();

  constructor() {
    if (typeof window === 'undefined') return;

    this.callbacks = [];
    this.now = performance.now();

    requestAnimationFrame(this.raf);
  }

  add(callback: Callback, priority = 0) {
    this.callbacks.push({ callback, priority });
    this.callbacks.sort((a, b) => a.priority - b.priority);

    return () => this.remove(callback);
  }

  remove(callback: Callback) {
    this.callbacks = this.callbacks.filter(({ callback: cb }) => callback !== cb);
  }

  raf = (now: number) => {
    requestAnimationFrame(this.raf);

    const deltaTime = now - this.now;
    this.now = now;

    for (let i = 0; i < this.callbacks.length; i++) {
      this.callbacks[i].callback(now, deltaTime);
    }
  };
}

const raf = new Raf();
export { raf };
