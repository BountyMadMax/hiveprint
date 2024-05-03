<script setup>
const props = defineProps({ columns: Array, rows: Array, modelName: String, paginator: { type: Boolean, default: true }});

const rowColumns = computed(() => props.columns?.map((column) => column.key));
</script>

<template>
  <table class="w-full">
    <thead>
      <tr class="font-semibold text-left">
        <th v-for="column in columns" :key="column.key" class="border h-10 border-slate-300 dark:border-slate-700 px-2 py-1">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <ListRow v-for="row in rows" :row="row" :columns="rowColumns" :key="row.id" :href="`${modelName}/${row.id}`"/>
    </tbody>
  </table>
  <ListPaginator v-if="paginator" :count="100" :per-page="5"/>
</template>
