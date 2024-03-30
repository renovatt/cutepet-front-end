import type { CatBreed } from '~/utils/entities/cat-breeds'
import type { DogBreed } from '~/utils/entities/dog-breeds'

const catViralata = {
  id: 'viralata',
  name: 'Viralata',
  life_span: '',
  description: '',
  affection_level: 0,
  energy_level: 0,
  intelligence: 0,
  image: {
    url: 'https://cdn.shopify.com/s/files/1/0500/8965/6473/files/cat-gdede5f720_1920_480x480.jpg?v=1663248430',
    height: 0,
    width: 0,
    id: ''
  },
  reference_image_id: ''
}

const dogViralata = {
  id: 'viralata',
  name: 'Viralata',
  life_span: '',
  temperament: '',
  reference_image_id: '',
  image: {
    url: 'https://i.pinimg.com/originals/ef/0e/ab/ef0eaba2dbc1b61d8770796f758e41c7.jpg',
  },
}

export const usePets = () => {
  const newArrayCats = ref<CatBreed[]>([])
  const newArrayDogs = ref<DogBreed[]>([])

  const { breeds: cats } = useCatBreeds()
  const { breeds: dogs } = useDogBreeds()

  watch([cats, dogs], ([newCats, newDogs]) => {
    if (newCats && newDogs) {
      newArrayCats.value = [catViralata, ...newCats]
      newArrayDogs.value = [dogViralata, ...newDogs]
    }
  })

  return {
    cats: newArrayCats,
    dogs: newArrayDogs,
  }
}
