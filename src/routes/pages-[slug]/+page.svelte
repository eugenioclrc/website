<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="max-w-screen-2xl p-8 mx-auto">
  <article class="prose">
    {@html data.content}
  </article>
</div>
