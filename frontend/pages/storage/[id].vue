<script setup>
const route = useRoute();
</script>

<template>
  {{ route.params.id }}
</template>