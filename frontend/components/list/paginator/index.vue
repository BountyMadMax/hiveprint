<script setup lang="ts">
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-vue-next';

const props = defineProps<{
  count: number,
  perPage: number,
}>();

const route = useRoute();

let currentPage = computed(() => route.query['page'] ?? 0);
const lastPage = computed(() => Math.ceil(props.count / props.perPage));

let pageNumbers = computed(() => Array.from(
  Array(lastPage.value > 5 ? 5 : lastPage.value),
  (_, i) => {
    return currentPage.value <= 2 ? i : currentPage.value >= lastPage.value - 2 ? lastPage.value - (5 - i) : i + (currentPage.value - 2)
  }
));

function linkHref(pageNumber) {
  return `${route.path}?page=${pageNumber}`;
}
</script>

<template>
  <div class="w-full my-4 flex justify-between flex-col sm:flex-row gap-2">
    <span class="flex m-auto">
      <ListPaginatorLink :href="linkHref(0)" :active="currentPage > 0" class="rounded-s-md">
        <ChevronsLeft class="h-4"/>
      </ListPaginatorLink>
      <ListPaginatorLink :href="linkHref(currentPage - 1)" :active="currentPage > 0">
        <ChevronLeft class="h-4"/>
      </ListPaginatorLink>

      <ListPaginatorLink v-for="pageNumber in pageNumbers" :href="`${$route.path}?page=${pageNumber}`" active :current="currentPage == pageNumber">
        <!-- +1 because humans start at 1, but pageNumbers starts at 0 -->
        {{ pageNumber + 1 }}
      </ListPaginatorLink>

      <ListPaginatorLink :href="linkHref(Number(currentPage) + 1)" :active="currentPage < lastPage - 1">
        <ChevronRight class="h-4"/>
      </ListPaginatorLink>
      <ListPaginatorLink :href="linkHref(lastPage - 1)" :active="currentPage < lastPage - 1" class="rounded-e-md">
        <ChevronsRight class="h-4"/>
      </ListPaginatorLink>
    </span>
    <span class="text-sm flex items-center m-auto sm:m-0">
      Total: {{ count }}
    </span>
  </div>
</template>
