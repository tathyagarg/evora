<script lang="ts">
  export let data: {
    title: string;
    content: string;
    imageUrl: string;
  };
</script>

<div class="w-full bg-backgorund border-2 rounded-sm overflow-hidden">
  <img
    id="landing-image"
    class="bg-secondary/25 border-secondary w-full aspect-square object-cover border-b-2"
    alt="tuff pic here"
    src={data.imageUrl}
  />
  <div class="p-2">
    <h1 class="font-heading text-2xl mb-6 mt-4">{data.title}</h1>
    <p>
      {data.content}
    </p>
  </div>
</div>
