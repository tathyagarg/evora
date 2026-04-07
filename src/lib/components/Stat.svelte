<script lang="ts">
  export let title: string;
  export let value: string;

  import Button from "./Button.svelte";
</script>

<Button>
  <div class="flex flex-col items-start justify-start gap-2">
    <strong class="text-4xl sm:text-6xl">{value}</strong>
    <span class="text-sm sm:text-lg">
      {title}
    </span>
  </div>
</Button>
