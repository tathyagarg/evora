<script lang="ts">
  import Date from "$lib/components/Date.svelte";
  import Tag from "$lib/components/Tag.svelte";

  let { data } = $props();

  let post = data.post;

  console.log("post", post);
</script>

<div
  class="w-screen h-screen flex flex-col items-center justify-center relative z-101 bg-cover bg-center"
  style={`background-image: radial-gradient(circle at 50%, rgba(0,0,0,0.65), rgba(0,0,0,0.0)), url(${post?.img});`}
>
  <div class="w-[50vw] text-center">
    <h1 class="text-6xl font-black mb-4">{post?.title}</h1>
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
    {#each post?.content.split("\n\n") as paragraph}
      {#if !paragraph.startsWith("<ol>")}
        <p class="py-4 text-lg leading-relaxed">
          {@html paragraph.replace(/\\n/g, "<br>")}
        </p>
      {:else}
        {@html paragraph}
      {/if}
    {/each}
    <div class="flex mt-8">
      <Date date={post?.created_at} />
    </div>
  </div>
</div>

<style>
  #post-content p:first-child::first-letter {
    font-size: 3.75em;
    font-weight: bold;
    float: left;
    line-height: 1;
    margin-right: 0.1em;
  }

  #post-content p:not(:first-child) {
    text-indent: 1.5em;
  }

  #post-content :global(p) {
    font-size: 1.25em;
    text-align: justify;
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
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  :global(.date) {
    margin-left: auto;
    color: var(--darker-secondary);
  }

  #post-content :global(h1) {
    font-size: 1.8em;
    line-height: 1.2;

    text-indent: 0;
    margin-top: 1em;
    margin-left: 0;
    margin-bottom: 1em;
    font-weight: bold;
    color: var(--color-emphasis);
    font-style: italic;
  }

  #post-content p > :global(h2) {
    text-indent: 0;
    margin-top: 2em;
    margin-left: 0;
    margin-bottom: 1em;
    font-weight: bold;
    color: var(--color-emphasis);
    font-style: italic;
  }

  #post-content :global(ol) {
    list-style: decimal outside;
    margin-left: 1.5em;
    margin-bottom: 1.5em;

    text-align: justify;

    & > :global(li) {
      margin-bottom: 1em;
    }
  }
</style>
