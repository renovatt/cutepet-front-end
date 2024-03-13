<script setup lang="ts">
import { ChevronDown, ChevronUp } from 'lucide-vue-next'
import { breedsDropdownRoutes } from '~/constants/routes'

const isActive = computed(() => useRoute().path)

const { isOpen } = useToggle()

const { sidebar } = defineProps({
  sidebar: Boolean,
})

</script>

<template>
  <div class="relative w-full">
    <NuxtLink :class="isOpen ? 'bg-secondary-foreground/5 text-primary' : 'text-muted-foreground'"
      class="flex w-full cursor-pointer items-center justify-center gap-5 rounded-lg bg-transparent p-2 shadow-none transition-all hover:bg-secondary-foreground/5"
      @click="isOpen = !isOpen">
      <component :is="breedsDropdownRoutes.icon" :class="isOpen ? 'text-primary' : 'text-muted-foreground -rotate-45'"
        class="transition-all" />
      <span :class="sidebar ? 'md:flex w-24 hidden' : 'hidden'">{{ breedsDropdownRoutes.name }}
        <ChevronUp v-if="isOpen" :class="isOpen ? 'text-primary' : 'text-muted-foreground'" class="ml-auto size-5" />
        <ChevronDown v-else :class="isOpen ? 'text-primary' : 'text-muted-foreground'" class="ml-auto size-5" />
      </span>
    </NuxtLink>

    <ul v-if="isOpen"
      class="absolute -top-32 right-0 mt-2 flex w-full flex-col gap-2 rounded border bg-primary-foreground p-2 shadow md:static md:border-none md:bg-transparent md:shadow-none">
      <NuxtLink v-for="link in breedsDropdownRoutes.children" :key="link.name" :to="link.path"
        :class="isActive === link.path ? 'bg-secondary-foreground/5 text-primary' : 'text-muted-foreground'"
        class="flex w-full items-center justify-center gap-5 rounded-lg p-2 transition-all hover:bg-secondary-foreground/5">
        <component :is="link.icon" :class="isActive === link.path ? 'text-primary' : 'text-muted-foreground'" />
        <span :class="sidebar ? 'md:flex w-24 hidden' : 'hidden'">{{ link.name }}</span>
      </NuxtLink>
    </ul>
  </div>
</template>
