<script lang="ts">
  import { route } from './utils/styles';
  import Index from './routes/index.svelte';
  import About from './routes/about.svelte';
  import Ripchord from './routes/ripchord.svelte';
  import Header from './components/layout/header.svelte';

  $:path = window.location.pathname;
</script>

<div id="app" class="dark">
  <div class={route}>
    <Header />
    {#if path === '/'}
      <Index />
    {:else if path === '/ripchord'}
      <Ripchord />
    {:else if path === '/about'}
      <About />
    {/if}
  </div>
</div>
