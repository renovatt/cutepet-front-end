<script setup lang="ts">
import 'v-calendar/dist/style.css'
import { DatePicker as VCalendarDatePicker } from 'v-calendar'
// @ts-ignore
import type { DatePickerDate, DatePickerRangeObject } from 'v-calendar/dist/types/src/use/datePicker'

const props = defineProps({
  modelValue: {
    type: [Date, Object] as PropType<DatePickerDate | DatePickerRangeObject | null>,
    default: null
  }
})

const emit = defineEmits(['update:model-value', 'close'])

const date = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:model-value', value)
    emit('close')
  }
})

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
  <VCalendarDatePicker v-if="date && (typeof date === 'object')" v-model.range="date" :columns="2"
    v-bind="{ ...attrs, ...$attrs }" />
  <VCalendarDatePicker v-else v-model="date" v-bind="{ ...attrs, ...$attrs }" />
</template>

<style>
:root {
  --vc-gray-50: rgb(var(--color-gray-50));
  --vc-gray-100: rgb(var(--color-gray-100));
  --vc-gray-200: rgb(var(--color-gray-200));
  --vc-gray-300: rgb(var(--color-gray-300));
  --vc-gray-400: rgb(var(--color-gray-400));
  --vc-gray-500: rgb(var(--color-gray-500));
  --vc-gray-600: rgb(var(--color-gray-600));
  --vc-gray-700: rgb(var(--color-gray-700));
  --vc-gray-800: rgb(var(--color-gray-800));
  --vc-gray-900: rgb(var(--color-gray-900));
}

.vc-primary {
  --vc-accent-50: rgb(var(--color-primary-50));
  --vc-accent-100: rgb(var(--color-primary-100));
  --vc-accent-200: rgb(var(--color-primary-200));
  --vc-accent-300: rgb(var(--color-primary-300));
  --vc-accent-400: rgb(var(--color-primary-400));
  --vc-accent-500: rgb(var(--color-primary-500));
  --vc-accent-600: rgb(var(--color-primary-600));
  --vc-accent-700: rgb(var(--color-primary-700));
  --vc-accent-800: rgb(var(--color-primary-800));
  --vc-accent-900: rgb(var(--color-primary-900));
}

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
