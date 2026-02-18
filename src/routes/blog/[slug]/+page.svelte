<script lang="ts">
  import Date from "$lib/components/Date.svelte";
  import Tag from "$lib/components/Tag.svelte";

  let { data } = $props();

  let post = data.post;

  import { onMount } from "svelte";

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
      const shade = (shade_range > 0.5 ? 255 : 0) * Math.random() * 0.75;

      if (data) {
        data[i] = shade;
        data[i + 1] = shade;
        data[i + 2] = shade;
        data[i + 3] = 20;
      }
    }

    ctx?.putImageData(imageData ?? new ImageData(0, 0), 0, 0);
    document.body.style.backgroundImage = `url(${canvas.toDataURL()})`;
  });

  console.log("post", post);
</script>

<div
  class="w-screen h-screen flex flex-col items-center justify-center relative z-101 bg-cover bg-center"
  style={`background-image: radial-gradient(circle at 50%, rgba(0,0,0,0.65), rgba(0,0,0,0.0)), url(${post?.img});`}
>
  <div class="w-[25vw] text-center">
    <h1 class="text-4xl font-black mb-4">{post?.title}</h1>
    <p class="text-lg">{post?.excerpt}</p>
  </div>
</div>

<!-- next page visible after scrolling 100vh -->
<div
  class="w-[80vw] m-auto min-h-screen flex py-[calc(var(--spacing)*16+5rem+2px)] font-serif"
>
  <div class="flex-1">
    <p class="py-2">
      Written by {post?.author}
    </p>
    <p class="py-2">
      {post?.content.split(/\s+/).length} words
    </p>
    <div>
      {#each post?.tags as tag}
        <Tag data={tag} />
      {/each}
    </div>
  </div>
  <div class="flex-4" id="post-content">
    {#each post?.content.split("\\n\\n") as paragraph}
      <p class="py-4 text-lg leading-relaxed">
        {@html paragraph.replace(/\\n/g, "<br>")}
      </p>
    {/each}
    <div class="flex mt-8">
      <Date date={post?.created_at} />
    </div>
  </div>
</div>

<style>
  #post-content p:first-child::first-letter {
    font-size: 3em;
    font-weight: bold;
    float: left;
    line-height: 1;
    margin-right: 0.1em;
  }

  #post-content p:not(:first-child) {
    text-indent: 1.5em;
  }

  #post-content :global(img) {
    width: 100%;
    height: auto;
    margin: 1.5em 0;
    border-radius: 0.5em;
  }

  #post-content :global(blockquote) {
    border-left: 4px solid var(--primary);
    padding-left: 1em;
    margin-left: 0;
    font-style: italic;
    color: var(--color-emphasis);

    font-size: 1.25em;
  }

  #post-content p > :global(blockquote) {
    text-indent: 0;
  }

  :global(.date) {
    margin-left: auto;
    color: var(--darker-secondary);
  }
</style>
