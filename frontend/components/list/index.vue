<script setup lang="ts">
import { ChevronDown, ChevronsUpDown, ChevronUp, RotateCw, Settings } from 'lucide-vue-next';

interface Columns {
  value: string,
  label: string,
  sortable?: boolean
}

const props = defineProps<{
  columns: Array<Columns>,
  rows: Array<{ id: number }>,
  modelName: string,
  onReload: () => void,
  onPageSizeChange: (size: number) => void,
  showSizeChanger: boolean,
  showReload: boolean,
  showSettings: boolean,
  showPagination: boolean,
}>();

const rowColumns = computed(() => props.columns?.map((column) => column.value));

const selectedColumns = ref(['name', 'hostname', 'ip']);

const sort = ref<null|string>(null);
const pageSize = ref<number>(25);

function updatePageSize(size: number) {
  pageSize.value = size;

  const route = useRoute();
  let query = route.query;

  if (Object.keys(query).includes('page_size')) {
    query.page_size = size;
  } else {
    // @ts-ignore
    query = { ...query, page_size: size };
  }
  console.log('PUSH', { path: route.path, query });
  useRouter().push({ path: route.path, query });
  
  props.onPageSizeChange(size);
}

function updateSort(value: string) {
  if (sort.value === value) {
    sort.value = `-${value}`;
  } else {
    sort.value = value;
  }
}
</script>

<template>
  <div v-bind="$attrs">
    <div class="w-full my-2 gap-2 flex justify-end">
      <span v-if="showSizeChanger" class="border rounded-md dark:border-slate-500">
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
      <button v-if="showReload" class="border rounded-md py-1 dark:border-slate-500 dark:hover:bg-slate-600" @click="onReload">
        <RotateCw class="h-4"/>
      </button>
      <DialogBtn v-if="showSettings">
        <template #button>
          <Settings class="h-4"/>
        </template>
        <template #header>
          <h2 class="px-2 py-1 text-2xl">Columns</h2>
        </template>
        <template #default>
          <InputCheckboxGroup :fields="columns" v-model="selectedColumns"/>
        </template>
      </DialogBtn>
    </div>
    <table class="w-full">
      <thead>
        <tr class="font-semibold text-left">
          <th v-for="column in columns" :key="column.value" v-show="selectedColumns.includes(column.value)" class="border h-10 border-slate-300 dark:border-slate-700">
            <button v-if="column.sortable" class="w-full text-left px-2 py-1 flex justify-between" @click="updateSort(column.value)">
              <span>
                {{ column.label }}
              </span>
              <span>
                <ChevronDown v-if="sort === column.value"/>
                <ChevronUp v-else-if="sort === `-${column.value}`"/>
                <ChevronsUpDown v-else/>
              </span>
            </button>
            <span v-else class="px-2 py-1">
              {{ column.label }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <ListRow v-for="row in rows" :row="row" :columns="rowColumns" :active-columns="selectedColumns" :key="row.id" :href="`${modelName}/${row.id}`"/>
      </tbody>
    </table>
    <ListPaginator v-if="showPagination" :count="100" :per-page="5"/>
  </div>
</template>
