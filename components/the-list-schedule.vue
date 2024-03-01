<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div
    class="flex w-full items-start justify-between rounded-md bg-white p-2 shadow">
    <span class="font-semibold text-california-950">{{ props.title }}</span>
    <span class="text-california-950">09:00 hrs</span>
  </div>
</template>
