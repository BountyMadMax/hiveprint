<script setup>
defineProps({ row: Object, columns: Array, href: String });
</script>

<template>
  <tr :class="{ 'hover:bg-slate-800': href }">
    <td v-for="column in columns" class="border border-slate-300 dark:border-slate-700">
      <NuxtLink v-if="href" :to="href" class="block px-2 py-1 hover:cursor-pointer">
        {{ row[column] }}
      </NuxtLink>
      <span v-else class="block px-2 py-1">
        {{ row[column] }}
      </span>
    </td>
  </tr>
</template>
