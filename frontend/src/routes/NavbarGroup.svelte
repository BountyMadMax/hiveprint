<script>
  import ChevronDown from 'lucide-svelte/icons/chevron-down';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  /** @typedef {import('svelte').Snippet} Snippet */
  /** @type {{ header: Snippet, body: Snippet, href: string }}*/
  const { header, body, href } = $props();

  let open = $state(false);
</script>

<li>
  <div class='flex h-10 select-none'>
    <a {href} class='w-full px-2 flex gap-2 items-center hover:bg-slate-300 dark:hover:bg-slate-700 transition-all'>
      {@render header()}
    </a>
    <button class='w-8 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-700 translate-all' onclick={() => open = !open}>
      {#if open}
        <ChevronDown/>
      {:else}
        <ChevronRight/>
      {/if}
    </button>
  </div>
  <ul class:hidden={!open}>
    {@render body()}
  </ul>
</li>
