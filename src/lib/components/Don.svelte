<script lang="ts">
  import Button from "./Button.svelte";

  export let img: string;
  export let name: string;
  export let description: string;
</script>

<Button>
  <div class="grid grid-cols-2 gap-4 h-full">
    <img src={img} alt={name} class="h-full object-cover content-center" />
    <div class="col-start-2">
      <h3 class="text-2xl font-semibold mb-2">{name}</h3>
      <p class="text-sm">{description}</p>
    </div>
  </div>
</Button>
