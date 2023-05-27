<script lang="ts">
  import { link } from '../utils/styles';
  import Centered from '../components/layout/centered.svelte';
</script>

<Centered>
  <div class="text-center text-xl">
    <div class="whitespace-nowrap">
      We're a small team of developers
    </div>
    <div class="mb-6">
      who love music.
    </div>
    <a class={link} href="mailto:info@trackbout.com">
      Drop us a line
    </a>
  </div>
</Centered>
