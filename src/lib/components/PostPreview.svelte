<script lang="ts">
  import type { PostPreviewData } from "$lib/models";
  import Button from "./Button.svelte";

  export let data: PostPreviewData;

  function titlecase(str: string): string {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
</script>

<Button align_top={true}>
  <button
    class="w-full h-full flex flex-col gap-4 cursor-pointer text-left"
    onclick={() => (window.location.href = `/blog/${data.slug}`)}
    aria-label={`Read more about ${data.title}`}
  >
    <!-- kind -->
    <div
      class="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full w-fit"
    >
      {titlecase(data.kind.toString())}
    </div>
    <img
      src={data.img}
      alt={data.title}
      class="w-full h-60 object-cover rounded-lg"
    />
    <div class="flex flex-col gap-4">
      <h2 class="text-2xl">{data.title}</h2>
      <div class="flex gap-4 text-sm text-primary/50">
        <span>By {data.author}</span>
        <span>{data.created_at.toDateString()}</span>
      </div>
      <div class="flex gap-2">
        {#each data.tags as tag}
          <span
            class="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        {/each}
      </div>
      <p class="text-lg">{data.excerpt}</p>
      <a href="/blog/{data.slug}" class="text-secondary">Read more</a>
    </div>
  </button>
</Button>
