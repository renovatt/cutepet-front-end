<script setup>
import { X } from 'lucide-vue-next'

const { isOpen } = defineProps({ isOpen: Boolean })
const emit = defineEmits(['close'])

</script>

<template>
  <HTransitionRoot appear :show="isOpen" as="template">
    <HDialog as="div" class="relative z-50" @close="emit('close')">
      <HTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/25" />
      </HTransitionChild>

      <div class="fixed inset-0 overflow-y-auto scrollbar-hide">
        <div class="relative flex min-h-full items-center justify-center p-4 text-center">
          <HTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <HDialogPanel
              class="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <X class="absolute right-4 top-4 cursor-pointer rounded bg-primary text-secondary transition-all hover:bg-primary/70"
                @click="emit('close')" />
              <HDialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">

                <slot name="title" />
              </HDialogTitle>
              <slot name="content" />
            </HDialogPanel>
          </HTransitionChild>
        </div>
      </div>
    </HDialog>
  </HTransitionRoot>
</template>
