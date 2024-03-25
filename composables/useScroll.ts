import { useInfiniteScroll } from '@vueuse/core'

// const dogViralata = {
//   id: 'viralata',
//   name: 'Viralata',
//   life_span: '',
//   temperament: '',
//   reference_image_id: '',
//   image: {
//     url: 'https://i.pinimg.com/originals/ef/0e/ab/ef0eaba2dbc1b61d8770796f758e41c7.jpg',
//   },
// }

export const useScroll = async() => {
  const { getDogs, defautPage } = useFetchDogs()

  const breedsLimit = ref(15)
  const el = ref<HTMLElement | null>(null)
  const dogs = ref(await getDogs(breedsLimit.value, defautPage.value))

  // dogs.value = [dogViralata, ...dogs.value]

  const onScroll = async() => {
    defautPage.value++
    const breeds = await getDogs(breedsLimit.value, defautPage.value)
    dogs.value.push(...breeds)
  }

  const resetDogs = async() => {
    dogs.value = await getDogs(breedsLimit.value, defautPage.value)
  }

  const resetState = async() => {
    await resetDogs()
    defautPage.value = 0
  }

  useInfiniteScroll(el, async() => { await onScroll() }, { distance: 10 })

  return {
    el,
    dogs,
    resetState
  }
}
