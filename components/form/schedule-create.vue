<script setup lang="ts">
import { format } from 'date-fns'
import { useForm } from 'vee-validate'

import { ChevronsUpDown, Check, CalendarIcon, Cat, Dog } from 'lucide-vue-next'
import { toast } from '../ui/toast'
import { cn } from '~/lib/utils'
import { scheduleFormSchema } from '~/schemas/schedule-form'
import { age, sex, weight, services, times } from '~/constants/inputs'

const userId = decodeUserId()

const defaultValues = {
  petname: '',
  userId: userId as string,
  pet: 'DOG' as 'DOG' | 'CAT',
  status: 'PENDING' as 'PENDING' | 'FINISHED' | 'CANCELED',
  observation: 'Sem observações.',
  weight: weight[0].value,
  age: age[0].value,
  sex: sex[0].value,
  service: services[0].value,
  time: '',
  date: new Date(),
  breed: {
    id: 'viralata',
    name: 'Viralata',
    image: {
      url: 'https://i.pinimg.com/originals/ef/0e/ab/ef0eaba2dbc1b61d8770796f758e41c7.jpg'
    }
  },
}

const { handleSubmit, setValues, values } = useForm({
  validationSchema: scheduleFormSchema,
  initialValues: defaultValues
})

const chosenPet = ref(false)

const { cats, dogs } = usePets()
const { handleLimitSize, limit } = useDogBreeds()
const { create } = useSchedules()

const searchBreed = (name: string) => {
  const breedExists = dogs.value.some(dog => dog.name === name)

  if (!breedExists) {
    handleLimitSize()
  }
}

onMounted(() => {
  handleLimitSize()
})

watch(chosenPet, () => {
  limit.value = 70
  handleLimitSize()

  setValues({ breed: defaultValues.breed })

  if (chosenPet.value) {
    setValues({
      pet: 'CAT',
      breed: {
        image: {
          url: 'https://cdn.shopify.com/s/files/1/0500/8965/6473/files/cat-gdede5f720_1920_480x480.jpg?v=1663248430',
        },
      }
    })
  }
})

const onSubmit = handleSubmit(async (values) => {
  const res = await create(values)
  if (res.type === 'success') {
    toast({
      description: 'Agendado com sucesso!',
      class: 'text-green-500',
    })
  } else if (res.type === 'error') {
    toast({
      description: res.message,
      class: 'text-red-500',
    })
  }
})
</script>

<template>
  <section class="flex w-full flex-col space-y-2 rounded border p-2 shadow md:w-2/3">
    <section class="flex w-full items-center justify-start gap-4">
      <Button @click="chosenPet = !chosenPet">
        O pet é um:
      </Button>

      <div v-if="chosenPet" class="flex size-16 items-center justify-between gap-2">
        <Cat class="text-primary " />
        <p>Gato</p>
      </div>

      <div v-else class="flex size-16 items-center justify-between gap-2">
        <Dog class="text-primary " />
        <p>Cão</p>
      </div>
    </section>

    <form class="w-full space-y-2" @submit="onSubmit">
      <div class="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
        <FormField v-slot="{ componentField }" name="petname">
          <FormItem class="w-full md:w-44">
            <FormLabel>Nome</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Jujuba" v-bind="componentField" />
            </FormControl>
            <div class="h-5 w-full">
              <FormMessage />
            </div>
          </FormItem>
        </FormField>

        <FormField name="breed">
          <FormItem class="flex h-20 w-full flex-col md:w-[200px]">
            <FormLabel>Raça</FormLabel>
            <Popover>
              <PopoverTrigger as-child>
                <FormControl>
                  <Button variant="outline" role="combobox" aria-expanded="open" aria-label="Escholha a raça"
                    :class="cn('md:w-[200px] justify-between capitalize', !values.breed?.id && 'text-muted-foreground')">
                    <Avatar class="mr-2 size-5">
                      <AvatarImage :src="values?.breed?.image?.url ?? ''" :alt="values.breed?.name" />
                      <AvatarFallback>P</AvatarFallback>
                    </Avatar>
                    <span v-if="chosenPet" class="w-20 truncate">
                      {{ values.breed?.id ? cats?.find((breed) =>
        breed.id === values.breed?.id)?.name : 'Escholha a raça' }}
                    </span>

                    <span v-else class="w-20 truncate">
                      {{ values.breed?.id ? dogs?.find((breed) =>
        breed.id === values.breed?.id)?.name : 'Escholha a raça' }}
                    </span>
                    <ChevronsUpDown class="ml-2 size-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent class="w-44 p-0">
                <Command>
                  <CommandInput v-if="chosenPet" placeholder="Siamês" />
                  <CommandInput v-else placeholder="Pastor Alemão" @input="searchBreed" />
                  <CommandEmpty>Nada encontrado.</CommandEmpty>
                  <CommandList>
                    <CommandGroup v-if="chosenPet">
                      <CommandItem v-for="breed in cats" :key="breed.id" :value="breed.id"
                        @select="() => { setValues({ breed }) }">
                        <Avatar class="mr-2 size-5">
                          <AvatarImage v-if="breed?.image?.url" :src="breed?.image?.url" :alt="breed.name" />
                          <AvatarFallback>P</AvatarFallback>
                        </Avatar>
                        {{ breed.name }}
                        <Check
                          :class="cn('ml-auto h-4 w-4', breed.id === (values.breed?.id ?? '') ? 'opacity-100' : 'opacity-0')" />
                      </CommandItem>
                    </CommandGroup>

                    <CommandGroup v-else>
                      <CommandItem v-for="breed in dogs" :key="breed.id" :value="breed.id"
                        @select="() => { setValues({ breed }) }">
                        <Avatar class="mr-2 size-5">
                          <AvatarImage v-if="breed?.image?.url" :src="breed?.image?.url" :alt="breed.name" />
                          <AvatarFallback>P</AvatarFallback>
                        </Avatar>
                        {{ breed.name }}
                        <Check
                          :class="cn('ml-auto h-4 w-4', breed.id === (values.breed?.id ?? '') ? 'opacity-100' : 'opacity-0')" />
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <div class="h-5 w-full">
              <FormMessage />
            </div>
          </FormItem>
        </FormField>
      </div>

      <div class="flex w-full flex-col items-start justify-between gap-4 md:flex-row">
        <FormField v-slot="{ componentField }" type="radio" name="age">
          <FormItem class="space-y-3">
            <FormLabel>Idade</FormLabel>
            <FormControl>
              <RadioGroup class="flex flex-col space-y-1" v-bind="componentField">
                <FormItem v-for="option in age" :key="option.value" class="flex items-center gap-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem :value="option.value" />
                  </FormControl>
                  <FormLabel class="cursor-pointer font-normal">
                    {{ option.label }}
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <div class="h-5 w-full">
              <FormMessage />
            </div>
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" type="radio" name="weight">
          <FormItem class="space-y-3">
            <FormLabel>Peso</FormLabel>
            <FormControl>
              <RadioGroup class="flex flex-col space-y-1" v-bind="componentField">
                <FormItem v-for="option in weight" :key="option.value" class="flex items-center gap-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem :value="option.value" />
                  </FormControl>
                  <FormLabel class="cursor-pointer font-normal">
                    {{ option.label }}
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <div class="h-5 w-full">
              <FormMessage />
            </div>
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" type="radio" name="sex">
          <FormItem class="space-y-3">
            <FormLabel>Sexo</FormLabel>
            <FormControl>
              <RadioGroup class="flex flex-col space-y-1" v-bind="componentField">
                <FormItem v-for="option in sex" :key="option.value" class="flex items-center gap-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem :value="option.value" />
                  </FormControl>
                  <FormLabel class="cursor-pointer font-normal">
                    {{ option.label }}
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <div class="h-5 w-full">
              <FormMessage />
            </div>
          </FormItem>
        </FormField>
      </div>

      <div class="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
        <FormField v-slot="{ componentField, value }" name="date">
          <FormItem class="flex w-full flex-col">
            <FormLabel>Data</FormLabel>
            <Popover>
              <PopoverTrigger as-child>
                <FormControl>
                  <Button variant="outline"
                    :class="cn('md:w-44 ps-3 text-start font-normal', !value && 'text-muted-foreground')">
                    <span>{{ value ? format(value, 'd MMM, yyy') : "Escolha uma data" }}</span>
                    <CalendarIcon class="ms-auto size-4 text-primary" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent class="p-0">
                <Calendar v-bind="componentField" />
              </PopoverContent>
            </Popover>
            <div class="h-5 w-full">
              <FormMessage />
            </div>
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="time">
          <FormItem class="flex w-full flex-col">
            <FormLabel>Horários</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger class="md:w-44">
                  <SelectValue placeholder="Escolha um horário" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="option in times" :key="option" :value="option">
                    {{ option }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div class="h-5 w-full">
              <FormMessage />
            </div>
          </FormItem>
        </FormField>
      </div>

      <FormField v-slot="{ componentField }" type="radio" name="service">
        <FormItem class="space-y-3">
          <FormLabel>Atendimento</FormLabel>
          <FormControl>
            <RadioGroup class="flex flex-col gap-2 space-y-1 md:flex-row md:gap-10" v-bind="componentField">
              <FormItem v-for="option in services" :key="option.value" class="flex items-center gap-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem :value="option.value" />
                </FormControl>
                <FormLabel class="cursor-pointer font-normal">
                  {{ option.label }}
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <div class="h-5 w-full">
            <FormMessage />
          </div>
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="observation">
        <FormItem>
          <FormLabel>Observação</FormLabel>
          <FormControl>
            <Textarea placeholder="Cuidado, ele morde.." class="resize-none" v-bind="componentField" />
          </FormControl>
          <div class="h-5 w-full">
            <FormMessage />
          </div>
        </FormItem>
      </FormField>

      <Button type="submit" class="w-full">
        Salvar
      </Button>
    </form>
  </section>
</template>
