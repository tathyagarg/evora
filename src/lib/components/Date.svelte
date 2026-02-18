<script lang="ts">
  export let date: Date | undefined;

  const absolute_date = new Date(date ?? 0);

  const year = absolute_date.getFullYear();
  const month = absolute_date.toLocaleString("default", { month: "long" });
  const day = absolute_date.getDate();
</script>

{#if date !== undefined}
  <span class="date">
    {month}
    {day}, {year}
  </span>
{/if}
