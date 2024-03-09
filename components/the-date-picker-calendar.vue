<script setup>
import { ref } from 'vue'
import { DatePicker as VCalendarDatePicker } from 'v-calendar'
const date = ref(new Date())

watch(() => date.value, (newDate) => {
  if (newDate && typeof newDate === 'object') {
    console.log('Data selecionada mudou:', newDate)
  }
})

const attrs = {
  transparent: true,
  borderless: true,
  color: 'custom',
  'is-dark': { selector: 'html', darkClass: 'dark' },
  'first-day-of-week': 2
}
</script>

<template>
  <div class="grid w-full place-items-center">
    <VCalendarDatePicker v-model="date" mode="date" v-bind="{ ...attrs, ...$attrs }" />
  </div>
</template>

<style>
.vc-custom {
  --vc-accent-50: #fffaec;
  --vc-accent-100: #fff5d3;
  --vc-accent-200: #ffe7a6;
  --vc-accent-300: #ffd56d;
  --vc-accent-400: #ffb633;
  --vc-accent-500: #ff9e0b;
  --vc-accent-600: #fe8601;
  --vc-accent-700: #cb6203;
  --vc-accent-800: #a14d0b;
  --vc-accent-900: #813f0d;
}
</style>
