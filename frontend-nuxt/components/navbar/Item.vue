<script setup>
defineProps({ href: String })
</script>

<template>
  <li>
    <NuxtLink :to="href" class="flex items-center px-2 gap-2 h-10 hover:bg-slate-300 dark:hover:bg-slate-700 select-none">
      <slot/>
    </NuxtLink>
  </li>
</template>
