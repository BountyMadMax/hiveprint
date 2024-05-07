<script setup>
  const uid = getCurrentInstance().uid;

  function openDialog() {
    document.getElementById(uid).showModal();
  }
</script>

<template>
  <button @click="openDialog" class="border rounded-md py-1 dark:border-slate-500 dark:hover:bg-slate-600">
    <slot name="button"></slot>
  </button>

  <Dialog :uid="uid">
    <slot></slot>
  </Dialog>
</template>
