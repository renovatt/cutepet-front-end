<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from '@/components/ui/calendar'

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
