<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import PostPreview from "$lib/components/PostPreview.svelte";
  import { PostKind, type PostFilter } from "$lib/models.js";

  let { data } = $props();

  const posts = data.posts;

  var current_filters: PostFilter[] = $state([]);
  let current_posts = $derived.by(() => {
    if (current_filters.length === 0) {
      return posts.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
    }

    let required_kind = current_filters.find(
      (filter) => filter.kind !== undefined,
    );

    return posts
      .filter((post) =>
        required_kind ? post.kind === required_kind.kind : true,
      )
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
  });
</script>

<Heading text="Editorial" />

<div class="flex items-center gap-4 px-12 py-8 w-full *:flex-1">
  <div class="flex items-center gap-2">
    Post kind:
    <select
      class="bg-secondary text-primary px-2 py-1 rounded-full w-fit"
      onchange={(e) => {
        const value = (e.target as HTMLSelectElement).value;
        if (value === "all") {
          current_filters = [];
        } else if (value === "blogs") {
          current_filters = [{ kind: PostKind.BlogPost }];
        } else if (value === "opinionated") {
          current_filters = [{ kind: PostKind.OpinionatedPiece }];
        }
      }}
    >
      <option value="all">All</option>
      <option value="blogs">Blogs</option>
      <option value="opinionated">Opinionated</option>
    </select>
  </div>
</div>

<div class="grid grid-cols-3 gap-12 px-12 pb-12">
  {#if current_posts.length === 0}
    <p class="text-center col-span-3 text-lg">
      No posts found for the selected filters.
    </p>
  {:else}
    {#each current_posts.slice(0, 6) as post}
      <PostPreview data={post} />
    {/each}
  {/if}
</div>

<Footer top={""} />
