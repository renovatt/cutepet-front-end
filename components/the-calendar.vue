<script setup lang="ts">
const date = ref(new Date())

watch(() => date.value, (newDate) => {
  if (newDate && typeof newDate === 'object') {
    console.log('Data: ', newDate)
  }
})
</script>

<template>
  <Calendar v-model="date" class="rounded-md border" />
</template>
