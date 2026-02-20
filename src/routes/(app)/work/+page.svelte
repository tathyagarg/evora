<script lang="ts">
  import EventPreview from "$lib/components/EventPreview.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import PostPreview from "$lib/components/PostPreview.svelte";
  import { PostKind, type PostFilter } from "$lib/models.js";

  let { data } = $props();

  const events = data.events;
</script>

<Heading text="Our Work" />

<div class="grid grid-cols-3 gap-12 px-12 pb-8">
  {#each events.slice(0, 6) as event}
    <EventPreview data={event} />
  {/each}
</div>
