<script lang="ts">
  export let title: string;
  export let value: string;

  import Button from "./Button.svelte";
</script>

<Button>
  <strong class="text-5xl">{value}</strong>
  {title}
</Button>
