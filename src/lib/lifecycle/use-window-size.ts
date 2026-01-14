import { onMount } from 'svelte';
import { writable } from 'svelte/store';

interface Size {
  width: number;
  height: number;
}

export function useWindowSize(initialWidth = Infinity, initialHeight = Infinity) {
  const state = writable<Size>({ width: initialWidth, height: initialHeight });
  let frame = 0;

  const setRafState = (value: Size) => {
    cancelAnimationFrame(frame);

    frame = requestAnimationFrame(() => {
      state.set(value);
    });
  };

  const handler = () => {
    setRafState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  onMount(() => {
    handler();
    window.addEventListener('resize', handler);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', handler);
    };
  });

  return [state, handler] as const;
}
