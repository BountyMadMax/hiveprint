<script setup>
const columns = [{ label: 'id', key: 'id' }, { label: 'Hostname', key: 'hostname' }];
const rows = [{ id: 1, hostname: 'localhost' }, { id: 3, hostname: 'mystorage.de' }];
</script>

<template>
  <h1>Storage</h1>
  <List :columns="columns" :rows="rows" model-name="storage"/>
</template>
