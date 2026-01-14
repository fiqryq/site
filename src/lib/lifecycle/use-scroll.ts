import { lenisStore } from '$lib/utils/lenis';
import { onMount } from 'svelte';
import { get } from 'svelte/store';

export function useScroll(callback: (...args: any[]) => void) {
  const lenisVal = get(lenisStore);

  const unsubscribe = lenisStore.subscribe((lenis) => {
    lenis?.on('scroll', callback);
  });

  onMount(() => {
    return () => {
      lenisVal?.off('scroll', callback);
      unsubscribe();
    };
  });
}
