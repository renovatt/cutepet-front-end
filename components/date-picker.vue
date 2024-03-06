<script setup lang="ts">
const date = ref(new Date())

watch(date, (newVal) => {
  console.log('newVal', newVal)
})
</script>

<template>
  <div class="px-4">
    <v-locale-provider locale="pt">
      <v-date-picker v-model="date" color="primary" title="Escolha uma data" header="Filtrar" location="pt" />
    </v-locale-provider>
  </div>
</template>
