<script setup lang="ts">
import { format } from 'date-fns'
import { useForm } from 'vee-validate'
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-vue-next'

import { toast } from '../ui/toast'
import { cn } from '~/lib/utils'
import { scheduleFormSchema } from '~/schemas/schedule-form'
import { age, sex, weight, times, services } from '~/constants/inputs'
import type { Schedule } from '~/utils/entities/schedule'

const { schedule } = defineProps<{ schedule: Schedule }>()

const { handleSubmit, setValues, values } = useForm({
  validationSchema: scheduleFormSchema,
  initialValues: schedule
})

const chosenPet = ref(schedule.pet)

const { cats, dogs } = usePets()
const { handleLimitSize } = useDogBreeds()
const { update, isLoading } = useSchedules()

const searchBreed = (name: string) => {
  const breedExists = dogs.value.some(dog => dog.name === name)

  if (!breedExists) {
    handleLimitSize()
  }
}

onMounted(() => {
  if (chosenPet.value === 'DOG') {
    handleLimitSize()
  }
})

const onSubmit = handleSubmit(async (values) => {
  if (schedule.id) {
    const res = await update(values, schedule.id)
    if (res.type === 'success') {
      toast({
        description: 'Atualizado com sucesso!',
        class: 'text-green-500',
      })
    } else if (res.type === 'error') {
      toast({
        description: res.message,
        class: 'text-red-500',
      })
    }
  }
})
</script>

<template>
  <form class="w-full space-y-2 rounded p-2 md:w-2/3" @submit="onSubmit">
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
                    <AvatarImage :src="values.breed?.image?.url ?? ''" :alt="values.breed?.name" />
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                  <span v-if="chosenPet === 'CAT'" class="w-20 truncate">
                    {{ values.breed?.id ? cats?.find((breed) => breed.id === values.breed?.id)?.name : 'Escholha a raça'
                    }}
                  </span>

                  <span v-else class="w-20 truncate">
                    {{ values.breed?.id ? dogs?.find((breed) => breed.id === values.breed?.id)?.name : 'Escholha a raça'
                    }}
                  </span>
                  <ChevronsUpDown class="ml-2 size-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent class="w-44 p-0">
              <Command>
                <CommandInput v-if="chosenPet === 'CAT'" placeholder="Siamês" />
                <CommandInput v-else placeholder="Pastor Alemão" @input="searchBreed" />
                <CommandEmpty>Nada encontrado.</CommandEmpty>
                <CommandList>
                  <CommandGroup v-if="chosenPet === 'CAT'">
                    <CommandItem v-for="breed in cats" :key="breed.id" :value="breed.id"
                      @select="() => { setValues({ breed }) }">
                      <Avatar class="mr-2 size-5">
                        <AvatarImage v-if="breed.image?.url" :src="breed?.image?.url" :alt="breed.name" />
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
                        <AvatarImage v-if="breed.image?.url" :src="breed.image?.url" :alt="breed.name" />
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
              <FormItem v-for=" option in age " :key="option.value" class="flex items-center gap-x-3 space-y-0">
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
              <FormItem v-for=" option in weight " :key="option.value" class="flex items-center gap-x-3 space-y-0">
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
              <FormItem v-for=" option in sex " :key="option.value" class="flex items-center gap-x-3 space-y-0">
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
                <SelectItem v-for=" option in times " :key="option" :value="option">
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
            <FormItem v-for=" option in services " :key="option.value" class="flex items-center gap-x-3 space-y-0">
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
      {{ isLoading ? 'Salvando...' : 'Salvar' }}
    </Button>
  </form>
</template>
