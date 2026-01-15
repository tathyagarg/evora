<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";

  import Navbar from "$lib/components/Navbar.svelte";
  import { onMount } from "svelte";

  let { children } = $props();

  onMount(() => {
    const canvas = document.createElement("canvas");
    const size = 400;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    const imageData = ctx?.createImageData(size, size);
    const data = imageData?.data;

    for (let i = 0; i < (data?.length ?? 0); i += 4) {
      const shade_range = Math.random();
      const shade = (shade_range > 0.5 ? 255 : 0) * Math.random();

      if (data) {
        data[i] = shade;
        data[i + 1] = shade;
        data[i + 2] = shade;
        data[i + 3] = 15;
      }
    }

    ctx?.putImageData(imageData ?? new ImageData(0, 0), 0, 0);
    document.body.style.backgroundImage = `url(${canvas.toDataURL()})`;
  });
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="h-full w-full min-h-screen text-text font-text p-8">
  <Navbar />
  {@render children()}
</div>
