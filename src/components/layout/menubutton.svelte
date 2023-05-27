<script lang="ts">
  import MenuIcon from '../icons/menu.svelte';
  import MenuContent from './menucontent.svelte';
  import { tcE, tc0hf, bcThf } from '../../utils/styles';

  let isOpen = false;
  let menubutton = null;

  const closeMenu = () => isOpen = false;
  const toggleMenu = () => isOpen = !isOpen;
</script>

<div class="relative">
  <button class={`${tcE} ${tc0hf} align-top h-8 w-8`} bind:this={menubutton} on:click={toggleMenu}>
    <MenuIcon />
  </button>

  {#if isOpen}
    <MenuContent menubutton={menubutton} closeMenu={closeMenu} />
  {/if}
</div>
