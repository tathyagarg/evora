<script lang="ts">
  import PostPreview from "$lib/components/PostPreview.svelte";
  import { PostKind } from "$lib/models";
  import { posts } from "$lib/posts";

  type TestType = {
    name: string;
  };

  type PostFilter = PostKind | TestType;

  var current_filters: PostFilter[] = $state([]);
  let current_posts = $derived.by(() => {
    if (current_filters.length === 0) {
      return posts.sort(
        (a, b) => b.created_at.getTime() - a.created_at.getTime(),
      );
    }

    let required_kind = current_filters.find(
      (filter: PostFilter) =>
        filter === PostKind.BlogPost || filter === PostKind.OpinionatedPiece,
    );

    return posts
      .filter((post) => (required_kind ? post.kind === required_kind : true))
      .sort((a, b) => b.created_at.getTime() - a.created_at.getTime());
  });
</script>

<div class="flex items-center gap-4 px-12 py-8">
  <div class="flex items-center gap-2">
    Post kind:
    <select
      class="bg-secondary text-primary px-2 py-1 rounded-full w-fit"
      onchange={(e) => {
        const value = (e.target as HTMLSelectElement).value;
        if (value === "all") {
          current_filters = [];
        } else if (value === "blogs") {
          current_filters = [PostKind.BlogPost];
        }
      }}
    >
      <option value="all">All</option>
      <option value="blogs">Blogs</option>
    </select>
  </div>
</div>

<div class="grid grid-cols-3 gap-12 px-12 pb-8">
  {#each current_posts.slice(0, 6) as post}
    <PostPreview data={post} />
  {/each}
</div>
