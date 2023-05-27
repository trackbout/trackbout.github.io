<script lang="ts">
  export let dir = 'ttb';
  export let kind = 'basic';
  export let label = 'Submit';
  export let width = 'w-full';
  export let isLoading = false;
  export let isDisabled = false;
  export let handleClick = () => {};

  import SpinIcon from '../icons/spin.svelte';
  import { afill, bgE, boxShadow } from '../../utils/styles';

  const container = 'relative inline-block align-top h-11 rounded-md text-center text-shadow font-bold overflow-hidden focus:outline-none';

  const colors = {
    basic: 'from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 focus-visible:from-blue-600 focus-visible:to-cyan-600',
    warning: 'from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 focus-visible:from-orange-600 focus-visible:to-yellow-600',
    success: 'from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 focus-visible:from-green-600 focus-visible:to-teal-600',
    danger: 'from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 focus-visible:from-red-600 focus-visible:to-pink-600'
  };

  const loadingColors = {
    basic: 'from-blue-600 to-cyan-600',
    warning: 'from-orange-600 to-yellow-600',
    success: 'from-green-600 to-teal-600',
    danger: 'from-red-600 to-pink-600'
  };

  const direction = {
    ltr: 'bg-gradient-to-r animate-gradient-x',
    rtl: 'bg-gradient-to-l animate-gradient-x',
    ttb: 'bg-gradient-to-b animate-gradient-y',
    btt: 'bg-gradient-to-t animate-gradient-y',
    tld: 'bg-gradient-to-br animate-gradient-tl',
    trd: 'bg-gradient-to-bl animate-gradient-tr'
  }[dir];

  $: shadow = isLoading ? 'shadow-none' : boxShadow;
  $: cursor = isLoading ? 'cursor-default' : 'cursor-pointer';
  $: color = isLoading ? loadingColors[kind] : colors[kind];

  const onClick = () => {
    if (isLoading) { return; }
    handleClick();
  };
</script>

{#if isDisabled}
  <div class={`${container} ${width} ${bgE} py-2.5 text-zinc-400`}>
    {label}
  </div>
{:else}
  <button on:click={onClick} class={`${container} ${direction} ${shadow} ${cursor} ${color} ${width} hover:shadow-none text-white`}>
    <span class={`${afill} ${isLoading ? '-translate-y-9' : 'translate-y-0'} pt-2.5 transition-transform`}>
      {label}
    </span>
    <span class={`${isLoading ? 'translate-y-0' : 'translate-y-9'} inline-block align-top h-6 w-6 transition-transform`}>
      <SpinIcon />
    </span>
  </button>
{/if}
