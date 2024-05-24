<script setup lang="ts">

interface Field {
  /** Computer value */
  value: string
  /** Human label */
  label: string
  /** Whether the field is checked */
  checked?: boolean
}

defineProps<{ fields: Array<Field> }>();

const model = defineModel();
</script>

<template>
  <form class="p-4">
    <fieldset class="flex flex-col">
      <legend class="font-bold">
        <slot/>
      </legend>

      <label v-for="field in fields">
        <input v-model="model" type="checkbox" :value="field.value" :checked="field.checked">
        {{ field.label }}
      </label>
    </fieldset>
  </form>
</template>
