<script setup lang="ts">
const date = ref(new Date())

watch(date, (newVal) => {
  console.log('newVal', newVal)
})
</script>

<template>
  <div class="shadow-lg">
    <v-locale-provider locale="pt">
      <v-date-picker v-model="date" color="primary" title="Escolha uma data" header="Filtrar" />
    </v-locale-provider>
  </div>
</template>
