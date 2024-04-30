<script>
	import { page } from "$app/stores";
  import Paginator from "$lib/components/Paginator.svelte";
  import List from "$lib/components/list/List.svelte";
	import { storage as storageModel } from "$lib/models/storage";

  const columns = [
    { label: 'Name', key: 'name', sortable: true },
    { label: 'Hostname', key: 'hostname', sortable: false },
    { label: 'Protocol', key: 'protocol', sortable: true },
  ];

  let storage = storageModel.Storage.create({ name: 'Locale storage', protocol: 'locale' })

  const rows = [
    { columns: [
        storage.name,
        'this',
        storage.protocol,
      ],
      href: '/',
    },
  ];

  /**
   * @param {string} sortColumn
   * @param {boolean} sortDesc
  */
  function onSortChange(sortColumn, sortDesc) {
    console.log('sort', sortColumn, sortDesc);
  }
</script>

<div class='m-10'>
  <h1 class='font-bold text-3xl my-4'>Storages</h1>
  
  <List {columns} {rows} {onSortChange}/>
  <Paginator count={100} amount={10} currentPage={0} route={$page.route.id ?? '/'}/>
</div>

<!-- <table class='w-full border-collapse border border-slate-300 dark:border-slate-700'>
  <thead>
    <tr class='font-semibold text-left'>
      <th class='border h-12 border-slate-300 dark:border-slate-700'>
        <button
          class='w-full h-full flex items-center justify-between pl-2 text-left hover:bg-slate-800 transition-all'
          onclick={() => onSortChange('name')}
        >
          <span>Name</span>
          <span>
            {#if sortColumn === 'name'}
              {#if sortDesc}
                <ChevronDown class='h-4'/>
              {:else}
                <ChevronUp class='h-4'/>
              {/if}
            {:else}
              <ChevronUp class='h-4'/>
              <ChevronDown class='h-4'/>
            {/if}
          </span>
        </button>
      </th>
      <th class='border border-slate-300 dark:border-slate-700 pl-2 h-12'>Hostname</th>
      <th class='border h-12 border-slate-300 dark:border-slate-700'>
        <button
          class='w-full h-full flex items-center justify-between pl-2 text-left hover:bg-slate-800 transition-all'
          onclick={() => onSortChange('protocol')}
        >
          <span>Protocol</span>
          <span>
            {#if sortColumn === 'protocol'}
              {#if sortDesc}
                <ChevronDown class='h-4'/>
              {:else}
                <ChevronUp class='h-4'/>
              {/if}
            {:else}
              <ChevronUp class='h-4'/>
              <ChevronDown class='h-4'/>
            {/if}
          </span>
        </button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class='border border-slate-300 dark:border-slate-700 pl-2'>My locale storage</td>
      <td class='border border-slate-300 dark:border-slate-700 pl-2'>locale</td>
      <td class='border border-slate-300 dark:border-slate-700 pl-2'>locale</td>
    </tr>
    <tr>
      <td class='border border-slate-300 dark:border-slate-700 pl-2'>My locale storage</td>
      <td class='border border-slate-300 dark:border-slate-700 pl-2'>locale</td>
      <td class='border border-slate-300 dark:border-slate-700 pl-2'>locale</td>
    </tr>
    <tr>
      <td class='border border-slate-300 dark:border-slate-700 pl-2'>My locale storage</td>
      <td class='border border-slate-300 dark:border-slate-700 pl-2'>locale</td>
      <td class='border border-slate-300 dark:border-slate-700 pl-2'>locale</td>
    </tr>
    <tr>
      <td class='border border-slate-300 dark:border-slate-700'>
        <a href='/' class='block pl-2 py-1'>
          My locale storage
        </a>
      </td>
      <td class='border border-slate-300 dark:border-slate-700'>
        <a href='/' class='block pl-2 py-1'>
          locale
        </a>
      </td>
      <td class='border border-slate-300 dark:border-slate-700 pl-2'>locale</td>
    </tr>
  </tbody>
</table> -->