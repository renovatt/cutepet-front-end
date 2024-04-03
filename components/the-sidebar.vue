<script setup>
import { ChevronLeft, ChevronRight, LogOut } from 'lucide-vue-next'
import { routes } from '~/constants/routes'

const isOpen = ref(true)
const isActive = computed(() => useRoute().path)

const { destroyToken } = useToken()

const handleLogout = () => {
  destroyToken()
  useRouter().push('/')
}

</script>

<template>
  <aside :class="isOpen ? 'md:w-72' : 'md:w-20'"
    class="fixed bottom-0 z-50 flex w-full flex-col items-center justify-start gap-5 border bg-primary-foreground p-2 shadow transition-all md:relative">
    <ChevronLeft v-if="isOpen"
      class="absolute -right-2 top-5 hidden size-4 cursor-pointer rounded-full bg-primary text-primary-foreground md:flex"
      @click="isOpen = !isOpen" />
    <ChevronRight v-else
      class="absolute -right-2 top-5 hidden size-4 cursor-pointer rounded-full bg-primary text-primary-foreground md:flex"
      @click="isOpen = !isOpen" />

    <section class="hidden w-full flex-col items-center justify-center gap-2 p-2 md:flex">
      <figure :class="isOpen ? 'size-14' : 'size-10'" class="rounded-full bg-primary">
        <img src="/logo-2.jpeg" alt="logo" class="size-full rounded-full">
      </figure>
      <span :class="isOpen ? 'flex' : 'hidden'" class="font-bold text-primary">CutePet</span>
    </section>

    <nav class="w-full md:mt-5">
      <ul class="flex w-full items-center justify-center gap-2 md:flex-col">
        <NuxtLink v-for="link in routes" :key="link.name" :to="link.href"
          :class="isActive === link.href ? 'bg-secondary-foreground/5 text-primary' : 'text-muted-foreground'"
          class="flex w-full items-center justify-center gap-5 rounded-lg p-2 transition-all hover:bg-secondary-foreground/5">
          <component :is="link.icon" :class="isActive === link.href ? 'text-primary' : 'text-muted-foreground'" />
          <span :class="isOpen ? 'md:flex w-24 hidden' : 'hidden'">{{ link.name }}</span>
        </NuxtLink>

        <the-nav-dropdown :sidebar="isOpen" />

        <NuxtLink to="/settings"
          :class="isActive === '/settings' ? 'bg-secondary-foreground/5 text-primary' : 'text-muted-foreground'"
          class="flex w-full items-center justify-center gap-5 rounded-lg p-2 transition-all hover:bg-secondary-foreground/5 md:hidden">
          <LogOut :class="isActive === '/settings' ? 'text-primary' : 'text-muted-foreground'" />
        </Nuxtlink>
      </ul>
    </nav>

    <section class="absolute bottom-5 hidden w-[93%] flex-col items-center justify-center gap-2 md:flex">
      <!-- <NuxtLink to="/settings"
        :class="isActive === '/settings' ? 'bg-secondary-foreground/5 text-primary' : 'text-muted-foreground'"
        class="flex w-full items-center justify-center gap-5 rounded-lg p-2 transition-all hover:bg-secondary-foreground/5">
        <Settings :class="isActive === '/settings' ? 'text-primary' : 'text-muted-foreground'" />
        <span :class="isOpen ? 'flex w-24' : 'hidden'">Configurações</span>
      </Nuxtlink> -->

      <Button
        class="flex w-full cursor-pointer items-center justify-center gap-5 rounded-lg bg-transparent p-2 text-muted-foreground shadow-none hover:bg-secondary-foreground/5  hover:text-primary"
        @click="handleLogout">
        <LogOut class="" />
        <span :class="isOpen ? 'flex w-24' : 'hidden'">Sair</span>
      </Button>
    </section>
  </aside>
</template>
