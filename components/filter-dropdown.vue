<script setup>
import { ArchiveIcon, ChevronDownIcon, DeleteIcon, EditIcon, MoveIcon } from 'lucide-vue-next'
</script>

<template>
  <div class=" top-16 text-right">
    <HeadlessMenu as="div" class="relative inline-block text-left">
      <div>
        <HeadlessMenuButton
          class="inline-flex w-full justify-center rounded-md bg-california-500 px-4 py-2 text-sm font-medium text-white hover:bg-california-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          Filtros
          <ChevronDownIcon class="-mr-1 ml-2 size-5 text-california-50 hover:text-california-100" aria-hidden="true" />
        </HeadlessMenuButton>
      </div>

      <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
        <HeadlessMenuItems
          class="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div class="space-y-2 p-1">
            <HeadlessMenuItem v-slot="{ active }">
              <button :class="[
                active ? 'bg-california-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md p-2 text-sm',
              ]">
                <EditIcon :active="active" class="mr-2 size-5 text-california-400" aria-hidden="true" />
                Edit
              </button>
            </HeadlessMenuItem>
            <HeadlessMenuItem v-slot="{ active }">
              <button :class="[
                active ? 'bg-california-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md p-2 text-sm',
              ]">
                <EditIcon :active="active" class="mr-2 size-5 text-california-400" aria-hidden="true" />
                Duplicate
              </button>
            </HeadlessMenuItem>
          </div>

          <div class="p-1">
            <HeadlessMenuItem v-slot="{ active }">
              <button :class="[
                active ? 'bg-california-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md p-2 text-sm',
              ]">
                <ArchiveIcon :active="active" class="mr-2 size-5 text-california-400" aria-hidden="true" />
                Archive
              </button>
            </HeadlessMenuItem>
            <HeadlessMenuItem v-slot="{ active }">
              <button :class="[
                active ? 'bg-california-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md p-2 text-sm',
              ]">
                <MoveIcon :active="active" class="mr-2 size-5 text-california-400" aria-hidden="true" />
                Move
              </button>
            </HeadlessMenuItem>
          </div>

          <div class="p-1">
            <HeadlessMenuItem v-slot="{ active }">
              <button :class="[
                active ? 'bg-california-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md p-2 text-sm',
              ]">
                <DeleteIcon :active="active" class="mr-2 size-5 text-california-400" aria-hidden="true" />
                Delete
              </button>
            </HeadlessMenuItem>
          </div>
        </HeadlessMenuItems>
      </transition>
    </HeadlessMenu>
  </div>
</template>
