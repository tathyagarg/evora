<!-- default layout -->
<script lang="ts">
  import "./layout.css";

  let { children } = $props();

  export const prerender = true;
</script>

<nav
  class="p-8 border-b-secondary border-b-2 flex gap-8 fixed w-screen bg-(--darker-primary) z-100"
>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

{@render children()}
