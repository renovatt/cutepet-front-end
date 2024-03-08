<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const breeds = [
  {
    id: 'viralata',
    label: 'viralata',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  },
  {
    id: 'benjamincanac',
    label: 'benjamincanac',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  },
  {
    id: 'Atinux',
    label: 'Atinux',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/904724?v=4'
    }
  },
  {
    id: 'smarroufin',
    label: 'smarroufin',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/7547335?v=4'
    }
  },
  {
    id: 'smarroufin-2',
    label: 'smarroufin-2',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/7547335?v=4'
    }
  }
]

const age = [
  { label: '0m - 6m', value: '0m-6m' },
  { label: '6m - 1a', value: '6m-1a' },
  { label: '1a - 2a', value: '1a-2a' },
  { label: '2a - 3a', value: '2a-3a' }
]

const weight = [
  { label: '0kg - 10kg', value: '0kg-10kg' },
  { label: '20kg - 40kg', value: '20kg-40kg' },
  { label: '40kg - 80kg', value: '40kg-80kg' },
  { label: '80kg - 120kg', value: '80kg-120kg' }
]

const sex = [
  { label: 'Macho', value: 'macho' },
  { label: 'Fêmea', value: 'femea' }
]

const times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']

const schema = z.object({
  name: z.string().min(3, 'Precisa ter no mínimo 3 caracteres'),
  obs: z.string().min(5, 'Precisa ter no mínimo 5 caracteres'),
  weight: z.string(),
  age: z.string(),
  time: z.string().min(1, 'Selecione um horário'),
  sex: z.string().min(1, 'Selecione'),
  date: z.string(),
  breed: z.object({
    id: z.string(),
    label: z.string(),
    avatar: z.object({
      src: z.string()
    })
  })
})

type Schema = z.infer<typeof schema>

const form = ref()
const { createdDate } = useDatePicker

function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
}

const state = reactive({
  name: '',
  weight: weight[0].value,
  age: age[0].value,
  sex: sex[0].value,
  time: '',
  obs: '',
  breed: breeds[0],
  date: new Date().toISOString()
})

watch(createdDate, (newValue) => {
  state.date = newValue
})

watch(state, (newState) => {
  if (typeof newState.breeds === 'object' && newState.breeds !== null) {
    state.breeds = newState.breeds.value
  }
})

</script>

<template>
  <UForm ref="form" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <div class="flex h-24 gap-4">
      <UFormGroup name="name" label="Nome">
        <template #label>
          <span class="font-bold text-california-500">Nome</span>
        </template>
        <UInput v-model="state.name" placeholder="Informe o nome do pet" />
      </UFormGroup>

      <UFormGroup name="breed" label="Raça">
        <template #label>
          <span class="font-bold text-california-500">Raça</span>
        </template>
        <USelectMenu v-model="state.breed" clear-search-on-close searchable :options="breeds">
          <template #leading>
            <UAvatar v-if="state.breed.avatar" v-bind="(state.breed.avatar as Avatar)" size="3xs" class="mx-0.5" />
          </template>
        </USelectMenu>
      </UFormGroup>
    </div>

    <div class="flex w-full items-start justify-between gap-4">
      <UFormGroup name="age" label="Idade">
        <template #label>
          <span class="font-bold text-california-500">Idade</span>
        </template>
        <URadio v-for="option in age" :key="option.value" v-model="state.age" v-bind="option">
          <template #label>
            <span class="cursor-pointer  font-bold text-california-950">{{ option.label }}</span>
          </template>
        </URadio>
      </UFormGroup>

      <UFormGroup name="weight" label="Peso">
        <template #label>
          <span class="font-bold text-california-500">Peso</span>
        </template>
        <URadio v-for="option in weight" :key="option.value" v-model="state.weight" v-bind="option">
          <template #label>
            <span class="cursor-pointer font-bold text-california-950">{{ option.label }}</span>
          </template>
        </URadio>
      </UFormGroup>

      <UFormGroup name="sex" label="Sexo">
        <template #label>
          <span class="font-bold text-california-500">Sexo</span>
        </template>
        <URadio v-for="option in sex" :key="option.value" v-model="state.sex" v-bind="option">
          <template #label>
            <span class="cursor-pointer font-bold text-california-950">{{ option.label }}</span>
          </template>
        </URadio>
      </UFormGroup>
    </div>

    <div class="flex h-20 items-start justify-between">
      <UFormGroup name="date" label="Data">
        <template #label>
          <span class="font-bold text-california-500">Data</span>
        </template>
        <the-select-created-date />
      </UFormGroup>

      <UFormGroup name="time" label="Hora">
        <template #label>
          <span class="font-bold text-california-500">Hora</span>
        </template>
        <USelectMenu v-model="state.time" :options="times" placeholder="Escolha um horário" />
      </UFormGroup>
    </div>

    <UFormGroup name="obs" label="Observação" class="h-28">
      <template #label>
        <span class="font-bold text-california-500">Observação</span>
      </template>
      <UTextarea v-model="state.obs" placeholder="Cuidado, ele morde.." />
    </UFormGroup>

    <UButton type="submit" block>
      Salvar
    </UButton>
  </UForm>
</template>
