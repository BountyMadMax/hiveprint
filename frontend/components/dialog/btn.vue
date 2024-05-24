<script setup>
import { generateUid } from '~/utils/uid';

const uid = ref(null);

onMounted(() => {
  uid.value = generateUid();
});

function openDialog() {
  const dialog = document.getElementById(uid.value);
  if (dialog instanceof HTMLDialogElement) {
    dialog.showModal();
  } else {
    console.warn(`Can not open dialog. Dialog with the uid ${uid.value} not found.`);
  }
}
</script>

<template>
  <button class="border rounded-md py-1 dark:border-slate-500 dark:hover:bg-slate-600" @click="openDialog">
    <slot name="button"/>
  </button>

  <Dialog :uid="uid">
    <template #header>
      <slot name="header"/>
    </template>
    <slot/>
  </Dialog>
</template>
