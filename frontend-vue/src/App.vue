<script setup>
  import { ref, reactive } from 'vue';

  const count = ref(0);

  const state = reactive({ count: 0 });

  function increment() {
    count.value++;
  }
</script>

<template>
  <button @click="increment">
    Click {{ count }}
  </button>

  <button @click="state.count++">
    Reactive {{ state.count }}
  </button>
</template>
