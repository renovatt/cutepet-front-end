<script setup lang="ts">
import { h } from 'vue'
import { format } from 'date-fns'
import { useForm } from 'vee-validate'
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-vue-next'

import { toast } from '../ui/toast'
import { cn } from '~/lib/utils'
import { scheduleFormSchema } from '~/schemas/schedule-form'
import { age, sex, weight, times } from '~/constants/inputs'

const defaultValues = {
  pet: 'dog' as 'dog' | 'cat',
  petname: 'Jujuba',
  breed: {
    id: '6',
    name: 'Akita',
    reference_image_id: 'BFRYBufpm',
    image: {
      url: 'https://cdn2.thedogapi.com/images/BFRYBufpm.jpg',
    },
  },
  age: '1a-2a',
  weight: '20kg-40kg',
  sex: 'macho',
  date: new Date('2024-03-30T15:35:39.078Z'),
  time: '10:00',
  obs: 'Cuidado, ele morde quando esta com fome!',
}

const { handleSubmit, setValues, values } = useForm({
  validationSchema: scheduleFormSchema,
  initialValues: defaultValues
})

const chosenPet = ref(defaultValues.pet)

const { cats, dogs } = usePets()

const onSubmit = handleSubmit((values) => {
  console.log(values)
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)))
  })
})

</script>

<template>
  <form class="w-full space-y-6 rounded border p-2 shadow md:w-2/3" @submit="onSubmit">
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

      <!-- cat breeds -->
      <FormField v-if="chosenPet === 'cat'" name="breed">
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
                  <span class="w-20 truncate">
                    {{ values.breed?.id ? cats?.find((breed) =>
    breed.id === values.breed?.id)?.name : 'Escholha a raça' }}
                  </span>
                  <ChevronsUpDown class="ml-2 size-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent class="w-44 p-0">
              <Command>
                <CommandInput placeholder="Siamês" />
                <CommandEmpty>Nada encontrado.</CommandEmpty>
                <CommandList>
                  <CommandGroup>
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
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <div class="h-5 w-full">
            <FormMessage />
          </div>
        </FormItem>
      </FormField>

      <!-- dog breeds -->
      <FormField v-else name="breed">
        <FormItem class="flex h-20 w-full flex-col md:w-[200px]">
          <FormLabel>Raça</FormLabel>
          <Popover>
            <PopoverTrigger as-child>
              <FormControl>
                <Button variant="outline" role="combobox" aria-expanded="open" aria-label="Escholha a raça"
                  :class="cn('md:w-[200px] justify-between capitalize', !values.breed?.id && 'text-muted-foreground')">
                  <Avatar class="mr-2 size-5">
                    <AvatarImage
                      :src="`https://cdn2.thedogapi.com/images/${values?.breed?.reference_image_id}.jpg` ?? ''"
                      :alt="values.breed?.name" />
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                  <span class="w-20 truncate">
                    {{ values.breed?.name ? dogs.find((breed) =>
    breed.name === values.breed?.name)?.name : 'Escholha a raça' }}
                  </span>
                  <ChevronsUpDown class="ml-2 size-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent class="w-44 p-0">
              <Command>
                <CommandInput placeholder="Pastor Alemão" />
                <CommandEmpty>Nada encontrado.</CommandEmpty>
                <CommandList>
                  <CommandGroup>
                    <CommandItem v-for="breed in dogs" :key="breed.id" :value="breed.name" @select="() => {
    setValues({
      breed: {
        ...breed,
        id: breed.name,
        image: {
          url: `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`
        },
        reference_image_id: breed.reference_image_id
      }
    })
  }">
                      <Avatar class="mr-2 size-5">
                        <AvatarImage v-if="breed?.reference_image_id"
                          :src="`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`"
                          :alt="breed.name" />
                        <AvatarFallback>P</AvatarFallback>
                      </Avatar>
                      {{ breed.name }}
                      <Check
                        :class="cn('ml-auto h-4 w-4', breed.name === (values.breed?.name ?? '') ? 'opacity-100' : 'opacity-0')" />
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
                <FormLabel class="font-normal">
                  {{ option.label }}
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
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
                <FormLabel class="font-normal">
                  {{ option.label }}
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
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
                <FormLabel class="font-normal">
                  {{ option.label }}
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
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

    <FormField v-slot="{ componentField }" name="obs">
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
</template>~/constants/inputs
