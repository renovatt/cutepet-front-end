<script setup lang="ts">
import { LogOut } from 'lucide-vue-next'

definePageMeta({ middleware: 'auth' })

const { destroyToken } = useToken()

const handleLogout = () => {
  destroyToken()
  useRouter().push('/')
}

</script>

<template>
  <section
    class="flex min-h-screen w-full flex-col items-center justify-center gap-10 space-y-4 overflow-y-auto p-4 pb-20 scrollbar-hide md:pb-0 lg:space-y-0">
    <header class="flex w-full flex-col items-center justify-between space-y-4">
      <h1 class="text-xl text-muted-foreground">
        Deseja sair da conta?
      </h1>

      <Button
        class="flex cursor-pointer items-center justify-center gap-5 rounded-lg p-2 font-normal text-secondary shadow-none"
        @click="handleLogout">
        Sair
        <LogOut />
      </Button>
    </header>

    <!-- <article class="flex w-full max-w-80 flex-col items-start justify-center gap-4">
      <h2 class="text-xl font-bold text-muted-foreground">
        Atualizar dados
      </h2>

      <div class="w-full">
        <ClientOnly>
          <form-auth-register-update />
          <template #placeholder>
            <div>Buscando dados...</div>
          </template>
</ClientOnly>
</div>
</article> -->
  </section>
</template>
