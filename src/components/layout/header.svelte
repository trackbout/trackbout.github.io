<script lang="ts">
  import MenuButton from './menubutton.svelte';
  import TrackboutIcon from '../icons/trackbout.svelte';
  import { header, boxShadow, primaryTc } from '../../utils/styles';
</script>

<div class={`${header} ${boxShadow}`}>
  <a href="/" class={`${primaryTc} inline-flex items-center h-full`}>
    <div class="inline-block h-full w-40 ml-1 mt-3"><TrackboutIcon /></div>
  </a>
  <div class="inline-block align-top h-full float-right">
    <MenuButton />
  </div>
</div>
