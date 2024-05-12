<script setup>
import { ChevronDown, ChevronsUpDown, ChevronUp, RotateCw, Settings } from 'lucide-vue-next';

const props = defineProps({
  columns: Array,
  columnsAvailable: Array,
  rows: Array,
  modelName: String,
  onReload: Function,
  onPageSizeChange: Function,
  showSizeChanger: { type: Boolean, default: true },
  showReload: { type: Boolean, default: true },
  showSettings: { type: Boolean, default: true },
  showPagination: { type: Boolean, default: true },
});

const rowColumns = computed(() => props.columnsAvailable?.map((column) => column.value));

const selectedColumns = ref(['name', 'hostname', 'ip']);
const sort = ref(null);
const pageSize = ref(25);

/** @param {Number} size */
function updatePageSize(size) {
  pageSize.value = size;
  useRouter().push({ path: useRoute().path, query: { page_size: pageSize.value }});
  
  props.onPageSizeChange(size);
}

/** @param {String} value */
function updateSort(value) {
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
          <InputCheckboxGroup :fields="columnsAvailable" v-model="selectedColumns"/>
        </template>
      </DialogBtn>
    </div>
    <table class="w-full">
      <thead>
        <tr class="font-semibold text-left">
          <th v-for="column in columnsAvailable" :key="column.value" v-show="selectedColumns.includes(column.value)" class="border h-10 border-slate-300 dark:border-slate-700">
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
