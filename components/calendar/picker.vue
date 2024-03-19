<script setup lang="ts">
const date = ref(new Date())

const { handleSaveDatePicker } = useDatePicker

watch(() => date.value, (newDate) => {
  if (newDate && typeof newDate === 'object') {
    handleSaveDatePicker(newDate)
  }
})
</script>

<template>
  <Calendar v-model="date" class="rounded-md border" />
</template>
