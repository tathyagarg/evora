<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { EventPreviewData } from "$lib/models";
  import Button from "./Button.svelte";
  import TimeDelta from "./TimeDelta.svelte";

  export let data: EventPreviewData;

  let disabled = data.has_recap;

  const start_date = new Date(data.start_date);
  const end_date = data.end_date ? new Date(data.end_date) : undefined;
</script>

<Button align_top={true}>
  <button
    class="w-full h-full flex flex-col gap-4 cursor-pointer text-left"
    onclick={() => (window.location.href = `/events/${data.slug}`)}
    aria-label={`Read more about ${data.title}`}
    {disabled}
  >
    <img
      src={data.img_url}
      alt={data.title}
      class="w-full aspect-[4/5] object-contain rounded-lg content-center"
    />
    <div class="flex flex-col gap-4">
      <h2 class="text-2xl">{data.title}</h2>
      <div class="flex flex-col gap-2">
        <div class="flex gap-2 items-center text-sm text-primary/50">
          <Icon icon="mdi:calendar" class="w-5 h-5" />
          <TimeDelta {start_date} {end_date} />
        </div>
        <div class="flex gap-2 items-center text-sm text-primary/50">
          <Icon icon="mdi:map-marker" class="w-5 h-5" />
          <span>{data.location}</span>
        </div>
      </div>
      <p class="text-lg">{data.description}</p>
      <a href="/events/{data.slug}" class="text-secondary">Read more</a>
    </div>
  </button>
</Button>
