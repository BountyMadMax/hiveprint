<script>
  /** @type {{ children: import('svelte').Snippet, href: string }}*/
  const { children, href } = $props();
</script>

<li>
  <a {href} class='flex items-center h-10 hover:bg-slate-300 dark:hover:bg-slate-700'>
    {@render children()}
  </a>
</li>
