<script>
  /** @typedef {import('svelte').Snippet} Snippet */
  /** @type {{ header: Snippet, body: Snippet, href: string }}*/
  const { header, body, href } = $props();

  let open = $state(false);
</script>

<li>
  <div class='flex h-10'>
    <a {href} class='w-full flex items-center hover:bg-slate-300 dark:hover:bg-slate-700 transition-all'>
      {@render header()}
    </a>
    <button class='w-8 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-700 translate-all' onclick={() => open = !open}>
      {open ? '>' : '<'}
    </button>
  </div>
  <ul class:hidden={!open}>
    {@render body()}
  </ul>
</li>
