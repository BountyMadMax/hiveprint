<script setup>
import { X } from 'lucide-vue-next';

const props = defineProps({ uid: Number });

function closeDialog() {
  document.getElementById(props.uid).close();
}
</script>

<template>
  <dialog :id="uid" class="bg-slate-100 dark:bg-slate-800 text-white min-w-96 min-h-48 rounded-md">
    <div class="flex bg-slate-700">
      <span class="w-full">
        <slot name="header"></slot>
      </span>

      <button @click="closeDialog" class="rounded-md py-1 dark:hover:bg-slate-600">
        <X class="h-4"/>
      </button>
    </div>
    <div>
      <slot></slot>
    </div>
  </dialog>
</template>
