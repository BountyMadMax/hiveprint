<script>
  /** @type {{ children: import('svelte').Snippet, href: string, active: boolean, current: boolean, class: string }} */
  const { children, href, active = false, current = false, class: additionalClasses = '' } = $props();
</script>

{#if active}
  <a
    {href}
    class:bg-slate-300={current}
    class:dark:bg-slate-700={current}
    class='border select-none w-8 flex items-center justify-center border-slate-300 hover:bg-slate-300 dark:border-slate-700 dark:hover:bg-slate-700 {additionalClasses}'
  >
    {@render children()}
  </a>
{:else}
  <span class='border select-none w-8 flex items-center justify-center border-slate-300 dark:border-slate-700 {additionalClasses}'>
    {@render children()}
  </span>
{/if}
