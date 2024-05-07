<script setup>
import { ChevronDown, ChevronUp } from 'lucide-vue-next';

defineProps({ href: String });

const open = ref(false);

function toggle() {
  open.value = !open.value
}
</script>

<template>
  <li>
    <div class="flex h-10 select-none">
      <NuxtLink :to="href" class="w-full px-2 flex gap-2 items-center hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
        <slot name="title"></slot>
      </NuxtLink>
      <button @click="toggle" class="w-8 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
        <ChevronDown v-if="open"/>
        <ChevronUp v-if="!open"/>
      </button>
    </div>
    <ul>
      <Transition name="slide-fade">
        <template v-if="open">
          <slot></slot>
        </template>
      </Transition>
    </ul>
  </li>
</template>
