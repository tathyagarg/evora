<script lang="ts">
  let { children } = $props();
</script>

<div
  class="bg-secondary text-background py-6 px-6 text-2xl rounded-lg shadow-[-6px_6px_0_var(--darker-secondary)] ring-2 ring-(--darker-secondary) inline-flex items-center gap-4 hover:translate-x-[6px] hover:translate-y-[-6px] transition-all hover:shadow-[-12px_12px_0_var(--darker-secondary)] duration-100 ease-in relative"
>
  {@render children()}
</div>
