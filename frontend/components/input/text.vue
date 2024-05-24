<script setup>
defineProps({ required: Boolean, messages: Array });
</script>

<template>
  <div class="w-fit">
    <label class="cursor-pointer">
      <div>
        <slot/>
        <span v-if="required" class="text-red-600 dark:text-red-500 select-none"">*</span>
      </div>
      <input
        v-bind="$attrs"
        type="text"
        class="bg-transparent border-b-2 cursor-auto focus-visible:outline-none border-slate-200 dark:border-slate-700 focus-visible:border-slate-300 dark:focus-visible:border-slate-600 disabled:border-gray-100 dark:disabled:border-gray-800"
      >
    </label>
    <div class="flex flex-col gap-1 text-sm w-full p-1">
      <div
        v-for="message in messages"
        class="border rounded-sm px-1"
        :class="{
          'bg-red-600 border-red-700 dark:bg-red-700 dark:border-red-600':message.type == 'error',
          'bg-orange-400 border-orange-500 dark:bg-orange-700 dark:border-orange-600':message.type == 'warning'
        }"
      >
        {{ message.message }}
      </div>
    </div>
  </div>
</template>
