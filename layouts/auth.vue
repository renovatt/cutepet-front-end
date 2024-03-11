<script setup lang="ts">
import { PawPrint } from 'lucide-vue-next'

const loginWithGoogle = () => {
  useRouter().push('/dashboard')
}
</script>

<template>
  <section class="flex h-screen w-full flex-col-reverse justify-between bg-primary-foreground/5 p-2">
    <article
      class="container flex size-full flex-col items-center justify-center overflow-y-auto rounded-3xl p-4 md:flex-row">
      <section class="hidden size-full place-items-center bg-black/20 md:grid md:w-1/2">
        <PawPrint class="size-40 text-primary" />
        <h1 class="text-6xl font-bold text-primary">
          CutePet
        </h1>
      </section>

      <section class="grid w-full place-items-center space-y-10 md:w-1/2">
        <slot name="header" />
        <slot name="form" />
        <div class="flex items-center justify-center gap-2">
          <Separator class="w-36" />
          <PawPrint class="size-5 -rotate-45 text-muted-foreground" />
          <Separator class="w-36" />
        </div>
        <Button type="button"
          class="w-80 rounded-full border bg-white py-6 text-muted-foreground transition-all hover:bg-secondary-foreground/5"
          @click="loginWithGoogle">
          <icon-google class="mr-2 size-6" /> Faça login com o Google
        </Button>
        <slot name="footer" />
      </section>
    </article>
  </section>
</template>
