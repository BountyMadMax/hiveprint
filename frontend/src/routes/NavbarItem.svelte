<script>
  /** @type {{ children: import('svelte').Snippet, href: string }}*/
  const { children, href } = $props();
</script>

<li>
  <a {href} class='flex items-center px-2 gap-2 h-10 hover:bg-slate-300 dark:hover:bg-slate-700 select-none'>
    {@render children()}
  </a>
</li>
