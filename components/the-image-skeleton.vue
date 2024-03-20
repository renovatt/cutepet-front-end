<script setup lang="ts">
import { ref, watch } from 'vue'
import { useImage, type UseImageOptions } from '@vueuse/core'

const props = defineProps({
  src: String,
  alt: String,
})

const imageOptions = ref<UseImageOptions>({ src: props.src || '' })
const { isLoading, error } = useImage(imageOptions.value)

watch(() => props.src, (newSrc) => {
  imageOptions.value.src = newSrc ?? ''
})

</script>

<template>
  <div v-if="isLoading" class="size-full animate-pulse bg-secondary p-2" />
  <img v-else-if="error" src="https://http.cat/images/404.jpg" class="max-w-full" :alt="props.alt">
  <img v-else :src="imageOptions.src" class="max-w-full" :alt="props.alt">
</template>
