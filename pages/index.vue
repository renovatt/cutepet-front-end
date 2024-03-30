<script setup lang="ts">
import { PawPrint } from 'lucide-vue-next'

definePageMeta({
  layout: false,
  middleware: 'auth'
})

const { accessToken } = useToken()

onMounted(() => {
  if (accessToken) {
    useRouter().push('/dashboard')
  } else {
    useRouter().push('/auth/login')
  }
})

</script>

<template>
  <the-loader>
    <template #icon>
      <div class="swing-animation">
        <PawPrint class=" size-10 -rotate-45 text-primary" />
      </div>
    </template>
  </the-loader>
</template>

<style scoped>
@keyframes swing {
  0% {
    transform: rotate(-10deg);
  }

  50% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(-10deg);
  }
}

.swing-animation {
  animation: swing 1.5s infinite ease-in-out;
}
</style>
