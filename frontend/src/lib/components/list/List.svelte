<script>
  /**
   * @typedef {Object} ColumnHeader
   * @property {string} label
   * @property {string} key
   * @property {boolean} sortable
  */

  /**
   * @typedef {{ columns: string[], href: null|string }} TableRow
  */

  /**
   * @callback onSortChange
   * @param {string} sortColumn
   * @param {boolean} sortDesc
   * @returns {void}
  */

	import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-svelte";
	import Row from "./Row.svelte";

  /** @type {{ columns: ColumnHeader[], rows: TableRow[], onSortChange: onSortChange }} */
  const { columns, rows, onSortChange } = $props();

  /** @type {string|null} */
  let sortColumn = $state(null);
  let sortDesc = $state(true);

  /** @param {string} column */
  function onSortClick(column) {
    if (sortColumn === column) {
      sortDesc = !sortDesc;
    } else {
      sortColumn = column;
      sortDesc = true;
    }

    onSortChange(sortColumn, sortDesc);
  }
</script>

<table class='w-full'>
  <thead>
    <tr class='font-semibold text-left'>
      {#each columns as column}
        <th class='border h-10 border-slate-300 dark:border-slate-700'>
          {#if column.sortable }
            <button
              class='w-full h-full flex items-center justify-between pl-2 text-left hover:bg-slate-300 dark:hover:bg-slate-800 transition-all'
              onclick={() => onSortClick(column.key)}
            >
              <span>{column.label}</span>
              <span>
                {#if sortColumn === column.key}
                  {#if sortDesc}
                    <ChevronDown class='h-4'/>
                  {:else}
                    <ChevronUp class='h-4'/>
                  {/if}
                {:else}
                  <ChevronsUpDown class='h-4'/>
                {/if}
              </span>
            </button>
          {:else}
            <span class='pl-2'>
              {column.label}
            </span>
          {/if}
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <Row columns={row.columns} href={row.href}/>
    {/each}
  </tbody>
</table>
