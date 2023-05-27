<script lang="ts">
  import YoutubeIcon from '../icons/youtube.svelte';
  import InstagramIcon from '../icons/instagram.svelte';
  import DiscordIcon from '../icons/discord.svelte';
  import TwitterIcon from '../icons/twitter.svelte';
  import FacebookIcon from '../icons/facebook.svelte';
  import { boxShadow } from '../../utils/styles';

  const link = 'inline-block align-top h-8 w-8 p-1 ml-2 rounded-md text-white';
</script>

<a href="https://www.instagram.com/trackbout" target="_blank" class={`${link} ${boxShadow}`} style="background-color:#BC2A8D;">
  <InstagramIcon />
</a>
<a href="https://www.youtube.com/trackbout" target="_blank" class={`${link} ${boxShadow}`} style="background-color:#FF0000;">
  <YoutubeIcon />
</a>
<a href="https://discord.gg/b2ddzBh" target="_blank" class={`${link} ${boxShadow}`} style="background-color:#7289DA;">
  <DiscordIcon />
</a>
<a href="https://twitter.com/trackbout" target="_blank" class={`${link} ${boxShadow}`} style="background-color:#1DA1F2;">
  <TwitterIcon />
</a>
<a href="https://www.facebook.com/trackbout" target="_blank" class={`${link} ${boxShadow}`} style="background-color:#3B5998;">
  <FacebookIcon />
</a>
