<script lang="ts">
  export let title: string;
  export let value: string;

  import Button from "./Button.svelte";
</script>

<Button>
  <div class="flex flex-row items-start gap-2">
    <strong class="text-[3em]/[0.9em]">{value}</strong>
    <span class="text-md">
      {title}
    </span>
  </div>
</Button>
