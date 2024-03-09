<script setup lang="ts">
type CardProps = {
  title: string
  subtitle: string
  value: string
}

const props = defineProps<CardProps>()
</script>

<template>
  <article
    class="bg-gradient size-38 flex flex-col items-center justify-around gap-2 rounded-3xl p-4 shadow-md md:size-40">
    <div class="flex w-full items-start justify-between">
      <h1 class="w-14 truncate font-semibold text-california-50 md:overflow-visible md:whitespace-normal">
        {{ props.title }}
      </h1>
      <slot name="icon" />
    </div>

    <div class="flex w-full flex-col items-start justify-center">
      <span class="flex items-center justify-center gap-1 text-xl font-semibold text-california-50 md:text-3xl">
        <span>{{ props.value }}</span>
      </span>
      <p class="text-semibold text-xs text-california-50">
        {{ props.subtitle }}
      </p>
    </div>
  </article>
</template>
