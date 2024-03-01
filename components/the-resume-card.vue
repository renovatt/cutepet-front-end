<script setup lang="ts">
type Props = {
  title: string
  quantity: string
}

const props = defineProps<Props>()
</script>

<template>
  <section class="flex w-full flex-col items-start justify-between gap-2 rounded-lg bg-white px-6 py-4 shadow">
    <slot name="icon" />
    <div class="flex w-full items-center justify-between">
      <h1 class="text-base font-bold text-california-950">
        {{ props.title }}
      </h1>
      <span class="flex items-center justify-center gap-2 text-xl font-bold text-california-950">
        {{ props.quantity }}
      </span>
    </div>
  </section>
</template>
