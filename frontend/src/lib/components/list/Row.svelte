<script>
  /** @type {{ columns: string[], href: null|string }} */
  const { columns, href=null } = $props();
</script>

<tr>
  {#each columns as column}
    <td class='border border-slate-300 dark:border-slate-700'>
      {#if href}
        <a {href} class='block pl-2 py-1'>
          {column}
        </a>
      {:else}
        {column}
      {/if}
    </td>
  {/each}
</tr>
