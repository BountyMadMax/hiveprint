<script setup>
import { RotateCw, Settings } from 'lucide-vue-next';

const props = defineProps({
  columns: Array,
  columnsAvailable: Array,
  rows: Array,
  modelName: String,
  paginator: { type: Boolean, default: true },
  onReload: Function,
  onPageSizeChange: Function,
});

const rowColumns = computed(() => props.columns?.map((column) => column.key));

let pageSize = ref(25);

function updatePageSize(size) {
  pageSize.value = size;
  useRouter().push({ path: useRoute().path, query: { page_size: pageSize.value }});
  
  props.onPageSizeChange(size);
}
</script>

<template>
  <div v-bind="$attrs">
    <div class="w-full my-2 gap-2 flex justify-end">
      <span class="border rounded-md dark:border-slate-500">
        <button
          @click="updatePageSize(25)"
          class="px-1 rounded-md dark:hover:bg-slate-600"
        >
          25
        </button>
        <button
          @click="updatePageSize(50)"
          class="px-1 rounded-md dark:hover:bg-slate-600"
        >
          50
        </button>
        <button
          @click="updatePageSize(100)"
          class="px-1 rounded-md dark:hover:bg-slate-600"
        >
          100
        </button>
      </span>
      <button class="border rounded-md py-1 dark:border-slate-500 dark:hover:bg-slate-600" @click="onReload">
        <RotateCw class="h-4"/>
      </button>
      <DialogBtn>
        <template #button>
          <Settings class="h-4"/>
        </template>
        <template #default>
          <ul>
            <li v-for="column in columnsAvailable">
              {{ column }}
            </li>
          </ul>
        </template>
      </DialogBtn>
    </div>
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
  </div>
</template>
