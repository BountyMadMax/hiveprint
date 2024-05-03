<script setup>
defineProps({ href: String, active: { type: Boolean, default: false }, current: { type: Boolean, default: false } });
</script>

<template>
  <NuxtLink
    v-if="active"
    :to="href"
    :class="{ 'bg-slate-300': current, 'dark:bg-slate-700': current }"
    class="border select-none w-8 h-8 flex items-center justify-center border-slate-300 hover:bg-slate-300 dark:border-slate-700 dark:hover:bg-slate-700 cursor-pointer text-sm"
  >
    <slot></slot>
  </NuxtLink>
  <span
    v-else
    class="border select-none w-8 h-8 flex items-center justify-center border-slate-300 dark:border-slate-700 text-sm"
  >
    <slot></slot>
  </span>
</template>
