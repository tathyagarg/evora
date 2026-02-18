<!-- default layout -->
<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import "../layout.css";

  let { children } = $props();
</script>

<nav
  class="px-12 py-8 border-b-secondary border-b-2 flex gap-8 fixed w-screen bg-(--darker-primary) z-100"
>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/editorial">Editorial</a>
  <a href="/work">Our Work</a>
  <a href="/contact">Contact</a>
</nav>

{@render children()}

<Footer top="" />
