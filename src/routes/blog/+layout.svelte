<!-- default layout -->
<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import "../layout.css";

  let { children } = $props();
</script>

<Navbar />

{@render children()}

<Footer top="" />
