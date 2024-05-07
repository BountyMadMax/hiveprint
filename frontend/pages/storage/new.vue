<script setup>
const messages = [{ type: 'warning', message: 'A new message' }, { type: 'error', message: 'A new error' }];
</script>

<template>
  <h1>New Storage</h1>

  <form>
    <InputText :messages="messages">
      Name
    </InputText>
  </form>
</template>
