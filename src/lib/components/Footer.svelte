<script lang="ts">
  export let top: string;

  const contacts = [
    { name: "Tattu", email: "67676767@676767.com" },
    { name: "Tattu", email: "67676767@676767.com" },
    { name: "Tattu", email: "67676767@676767.com" },
    { name: "Tattu", email: "67676767@676767.com" },
  ];
</script>

<footer
  style="top: {top}"
  class="relative h-[50vh] bg-secondary text-primary p-12 z-0"
>
  <h1 class="font-bold text-center text-5xl">Contact Us</h1>
  <hr />
  <table class="w-full mt-8 text-center text-xl">
    <tbody>
      {#each contacts as contact}
        <tr>
          <td>{contact.name}:</td>
          <td><a href="mailto:{contact.email}">{contact.email}</a></td>
        </tr>
      {/each}
    </tbody>
  </table>
</footer>

<style>
  tr {
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  td {
    padding: 1em;
    width: 100%;
  }

  td:first-child {
    text-align: left;
  }

  td:nth-child(2) {
    text-align: right;
    color: rgba(from var(--lighter-primary) r g b / 0.6);

    transition: color 0.3s ease;

    &:hover {
      color: var(--lighter-primary);
    }
  }
</style>
