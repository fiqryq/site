import { onMount } from 'svelte';

import { raf } from '$lib/utils/tempus';

export function useFrame(callback: (...args: any[]) => void, priority = 0) {
  onMount(() => {
    if (callback) {
      raf.add(callback, priority);

      return () => raf.remove(callback);
    }
  });
}
