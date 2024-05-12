<script setup>
const props = defineProps({ fields: Array });

const model = defineModel();
</script>

<template>
  <form class="p-4">
    <fieldset class="flex flex-col">
      <legend class="font-bold">
        <slot></slot>
      </legend>

      <label v-for="field in fields">
        <input type="checkbox" :value="field.value" :checked="field.checked" v-model="model"/>
        {{ field.label }}
      </label>
    </fieldset>
  </form>
</template>
