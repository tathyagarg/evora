<script lang="ts">
  import Icon from "@iconify/svelte";

  import Button from "$lib/components/Button.svelte";
  import Stat from "$lib/components/Stat.svelte";
  import PostPreview from "$lib/components/PostPreview.svelte";
  import { PostKind, type PostPreviewData } from "$lib/models";

  const latest_posts: PostPreviewData[] = [
    {
      kind: PostKind.BlogPost,
      slug: "legal-aid-for-all",
      title: "Legal Aid for All: Empowering the Marginalized",
      excerpt:
        "Discover how our legal aid initiatives are transforming lives and empowering marginalized communities. From providing free legal services to advocating for justice, we are committed to making a difference. Join us in our mission to create a more equitable society.",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnYWwlMjBhZGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      created_at: new Date("2024-06-01"),
      updated_at: null,
      author: "Tattu",
      tags: ["legal aid", "empowerment", "marginalized communities"],
    },
    {
      kind: PostKind.BlogPost,
      slug: "women-in-law-breaking-barriers",
      title: "Women in Law",
      excerpt: "Breaking Barriers and Shaping the Future",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ltZW4lMjBpbiUyMGxhd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      created_at: new Date("2024-05-15"),
      updated_at: null,
      author: "Tattu",
      tags: ["women", "law", "breaking barriers"],
    },
    {
      kind: PostKind.OpinionatedPiece,
      slug: "legal-education-for-all",
      title: "Legal Education for All",
      excerpt:
        "Unlocking Opportunities and Empowering Communities through Legal Education. Our commitment to providing accessible legal education is transforming lives and fostering a more informed society. Join us in our mission to empower individuals with knowledge and create a brighter future for all.",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnYWwlMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      created_at: new Date("2024-04-30"),
      updated_at: null,
      author: "Tattu",
      tags: ["legal education", "empowerment", "accessible education"],
    },
  ];
</script>

<main
  class="h-[100vh] w-screen fixed top-[calc(var(--spacing)*16+1.5em+2px)] z-0"
>
  <div
    class="h-full w-full bg-primary flex items-center justify-center relative"
  >
    <div
      class="flex h-full w-full flex-col items-center justify-center gap-4 relative z-1"
    >
      <h1 class="text-[2.5rem]">Pink Legal Club</h1>
      <h1 class="text-[8rem]">Evora</h1>
      <Button>
        <span>Our work</span>
        <Icon icon="mdi:arrow-right" class="text-2xl" />
      </Button>
    </div>
  </div>
</main>

<!--
<img
  src="/assets/waves.svg"
  alt="waves"
  width="100%"
  class="aspect-[16/9] relative top-[calc(var(--spacing)*16+2em+4px)] z-1"
/>
-->

<div
  class="h-[100vh] relative top-[100vh] z-1 bg-(--lighter-primary) text-lg border-y-2 border-secondary box-content"
>
  <div class="flex h-full w-full items-center justify-center gap-12 p-12">
    <div class="flex-1 box-border">
      <h1 class="text-7xl">Who we are</h1>
      <hr />
      <p class="mt-4">
        PLC Evora is a club under Pink Legal Clubs, an initiative of Pink
        Legal—India’s largest and only platform dedicated to women’s legal
        rights. Our focus lies in creating social impact and spreading legal
        awareness, especially among women and marginalized communities. Through
        impactful initiatives, PLC Evora has helped over 250 underprivileged
        children, supported 50+ families through relief and donation drives, fed
        100+ stray dogs, and conducted education and awareness programs for 200+
        women. We also run our own editorial platform that publishes articles on
        law, society, and gender justice.
      </p>
    </div>
    <div class="flex-1 grid grid-cols-2 gap-12">
      <Stat title="Children helped" value="250+" />
      <Stat title="Events conducted" value="20+" />
      <Stat title="Families supported" value="50+" />
      <Stat title="Dogs fed" value="100+" />
    </div>
  </div>
</div>

<!-- class="h-[calc(var(--spacing)*-16-1.5em-2px+100vh)] relative top-[calc(var(--spacing)*16+1.5em+2px)] z-1 bg-(--lighter-primary) py-20 px-12 box-border flex items-center justify-center gap-12 text-lg" -->
<div
  class="h-[100vh] relative top-[100vh] z-1 bg-primary py-20 px-12 box-border text-lg"
>
  <h1 class="text-7xl">Our latest work</h1>
  <hr />
  <div class="mt-12 grid grid-cols-3 gap-12">
    {#each latest_posts as post}
      <PostPreview data={post} />
    {/each}
  </div>
</div>
