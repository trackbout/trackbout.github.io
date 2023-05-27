<script lang="ts">
  import { youtubers } from '../utils/videos';
  import Social from '../components/common/social.svelte';
  import { afill, button } from '../utils/styles';

  const card = 'relative w-full rounded-md mb-10 md:mb-6 border border-white/20';
  const tab = 'absolute top-0 left-0 py-2 px-4 md:py-1 md:px-3 rounded-br-md bg-gradient-to-b from-violet-500 to-fuchsia-500 animate-gradient-y';
  const link = `${card} shadow-md block aspect-video text-xl md:text-lg font-bold italic text-white/75 hover:border-white/80 focus-visible:border-white/80 focus:outline-none overflow-hidden transition`;
</script>

<div class="fixed top-14 bottom-0 right-0 left-0 overflow-y-scroll bg-cover bg-center" style="background-image:url('/images/splash-page.jpg')">
  <div class="w-1/2 md:w-5/6 mx-auto my-60 md:my-40">
    <div class={`${card} shadow-md bg-black/60`}>
      <div class="text-center py-16 md:py-12">
        <div class="text-2xl md:text-lg text-white mb-4 md:mb-2 whitespace-nowrap">
          You can find Ripchord here:
        </div>
        <a href="/ripchord" class={`${button} shadow-md w-60 mx-auto`}>
          Go To Ripchord Download
        </a>
      </div>
    </div>
    {#each youtubers as { name, imageUrl, videoUrl }}
      <a href={videoUrl} target="_blank" class={`${link} text-shadow`}>
        <div class={`${afill} bg-cover bg-center opacity-75`} style={`background-image: url(${imageUrl});`} />
        <div class={tab}>{name}</div>
      </a>
    {/each}
  </div>
</div>
<div class="absolute bottom-5 left-5 text-white text-xl text-shadow font-bold md:hidden">
  We support producers.
</div>
<div class="absolute bottom-5 right-5">
  <Social />
</div>
