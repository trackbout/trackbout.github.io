<script lang="ts">
  export let closeMenu: Function;
  export let menubutton: SvelteComponent;

  import type { SvelteComponent } from 'svelte';
  import { fly } from 'svelte/transition';
  import GiftIcon from '../icons/gift.svelte';
  import InfoIcon from '../icons/info.svelte';
  import { bg1, bg2hf, bc0, boxShadow } from '../../utils/styles';

  const icon = 'inline-block align-top h-full w-6';
  const label = 'inline-block align-top h-full ml-1';
  const link = `${bg2hf} ${bc0} block px-4 py-2 border-b`;
  const container = `${boxShadow} ${bc0} ${bg1} absolute -right-1 top-14 w-40 border rounded-md overflow-hidden`;

  const handleKeyDown = (event: any) => {
    if (event.key === 'Escape') { closeMenu(); }
  };

  const handleClickAway = (event: any) => {
    if (!menubutton.contains(event.target)) { closeMenu(); }
  };
 </script>

<svelte:window on:keydown={handleKeyDown} on:click={handleClickAway} />

<div class={container} in:fly={{ duration: 150, y: -20, opacity: 0 }}>
  <a href="/ripchord" class={`${link} border-b-0`}>
    <div class={icon}><GiftIcon /></div>
    <div class={label}>Ripchord</div>
  </a>
  <a href="/about" class={`${link} border-b-0`}>
    <div class={icon}><InfoIcon /></div>
    <div class={label}>About</div>
  </a>
</div>
