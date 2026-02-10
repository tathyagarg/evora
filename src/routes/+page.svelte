<script lang="ts">
  import Icon from "@iconify/svelte";

  import Button from "$lib/components/Button.svelte";
  import Stat from "$lib/components/Stat.svelte";
</script>

<main
  class="h-[calc(var(--spacing)*-16-1.5em-2px+100vh)] w-screen fixed top-[calc(var(--spacing)*16+1.5em+2px)] z-0"
>
  <div class="flex h-full w-full flex-col items-center justify-center gap-4">
    <h1 class="text-[2.5rem]">Pink Legal Club</h1>
    <h1 class="text-[8rem]">Evora</h1>
    <Button>
      <span>Our work</span>
      <Icon icon="mdi:arrow-right" class="text-2xl" />
    </Button>
  </div>
</main>

<div
  class="h-[calc(var(--spacing)*-16-1.5em-2px+100vh)] relative top-[100vh] z-1 bg-(--lighter-primary) py-20 px-12 box-border flex items-center justify-center gap-12 text-lg"
>
  <div class="flex-1">
    <h1 class="text-7xl">Who we are</h1>
    <hr />
    <p class="mt-4">
      PLC Evora is a club under Pink Legal Clubs, an initiative of Pink
      Legal—India’s largest and only platform dedicated to women’s legal rights.
      Our focus lies in creating social impact and spreading legal awareness,
      especially among women and marginalized communities. Through impactful
      initiatives, PLC Evora has helped over 250 underprivileged children,
      supported 50+ families through relief and donation drives, fed 100+ stray
      dogs, and conducted education and awareness programs for 200+ women. We
      also run our own editorial platform that publishes articles on law,
      society, and gender justice.
    </p>
  </div>
  <div class="flex-1 grid grid-cols-2 gap-12">
    <Stat title="Children helped" value="250+" />
    <Stat title="Events conducted" value="20+" />
    <Stat title="Families supported" value="50+" />
    <Stat title="Dogs fed" value="100+" />
  </div>
</div>
