<script lang="ts">
  let { children } = $props();
</script>

<button
  class="px-8 py-4 bg-cyclamen text-white rounded hover:bg-pink-600 transition-colors duration-300"
>
  {@render children()}
</button>
