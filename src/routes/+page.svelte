<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import { animate, stagger } from "animejs";
  import { onMount } from "svelte";

  onMount(() => {
    animate(".head", {
      opacity: 0,
      duration: 0,
    });

    animate(".head", {
      opacity: 1,
      translateY: [50, 0],
      duration: 500,
      delay: stagger(250),
    });
  });
</script>

<!--
<div class="w-full h-screen absolute top-0 left-0">
  <img src="/assets/leaves.png" alt="Leaves" class="w-1/3" />
</div>
-->

<div class="w-full h-screen flex flex-col items-center justify-center">
  <h1 class="text-6xl text-center font-sf-march head">Pink Legal Club</h1>
  <h1 class="text-[15rem] leading-[1] text-center font-sf-march head">Evora</h1>
</div>
