<script lang="ts">
  import Blog from "$lib/components/Blog.svelte";
  import Icon from "@iconify/svelte";
</script>

<div
  class="w-full h-full flex flex-col justify-center items-center gap-16 pt-48"
>
  <div>
    <header class="text-8xl/40 text-center">PLC Evora</header>
    <!-- TODO: Link to PLC homepage -->
    <h2 class="text-center">A club under <a href="/">Pink Legal Clubs</a></h2>
  </div>
  <a
    href="/blog"
    class="flex gap-2 items-center text-lg underline bg-secondary/25 text-secondary px-4 py-2 rounded-full border-2 border-secondary"
    >Discover out latest work <Icon
      icon="material-symbols:arrow-right-alt"
      width="24"
      height="24"
    /></a
  >
  <img
    id="landing-image"
    class="bg-secondary/25 border-2 border-secondary w-full aspect-[5/2] rounded-sm object-cover"
    alt="tuff pic here"
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  />
</div>

<div>
  <div class="p-4 border-2 mt-4 text-center font-heading text-2xl">
    Who are we
  </div>
  <div class="p-4 border-2 mt-4 flex gap-4">
    <div class="flex-4 grow">
      <div class="flex flex-col gap-8 my-4">
        <div class="flex items-end gap-2">
          <h1 class="font-heading text-3xl/loose">Value</h1>
          <h2>Stat<br />Name</h2>
        </div>
        <div class="flex items-end gap-2">
          <h1 class="font-heading text-3xl/loose">Value</h1>
          <h2>Stat<br />Name</h2>
        </div>
        <div class="flex items-end gap-2">
          <h1 class="font-heading text-3xl/loose">Value</h1>
          <h2>Stat<br />Name</h2>
        </div>
      </div>

      <p class="text-2xl font-light mt-8">
        PLC Evora is a student-led organization dedicated to fostering a
        community of legal enthusiasts within the Pink Legal Clubs network. Our
        mission is to provide a platform for students to explore legal topics,
        engage in meaningful discussions, and develop their understanding of the
        law in a supportive and inclusive environment.
      </p>
    </div>
    <img
      class="rounded-sm object-cover flex-1 shrink"
      alt="tuff pic here"
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    />
  </div>
</div>

<div>
  <div class="p-4 border-2 mt-4 text-center font-heading text-2xl">
    Our blog
  </div>
  <div class="p-4 border-2 mt-4 grid grid-cols-3 gap-4 h-fit">
    <Blog
      data={{
        title: "dih",
        content: "if u see this ur short",
        imageUrl:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      }}
    />
    <Blog
      data={{
        title: "yo gurt",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageUrl:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      }}
    />
  </div>
</div>
