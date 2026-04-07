<script lang="ts">
  import Button from "./Button.svelte";

  export let img: string;
  export let name: string;
  export let description: string;
</script>

<Button>
  <div class="flex flex-col sm:flex-row gap-4 h-full">
    <img
      src={img}
      alt={name}
      class="w-full sm:w-1/2 object-cover content-center"
    />
    <div class="flex-1">
      <h3 class="text-2xl font-semibold mb-2">{name}</h3>
      <p class="text-sm">{description}</p>
    </div>
  </div>
</Button>
