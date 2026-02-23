<!-- default layout -->
<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import "../layout.css";

  let { children } = $props();
</script>

<Navbar />

<div class="relative top-[calc(var(--spacing)*16+1.5em+2px)] z-0">
  {@render children()}
</div>
