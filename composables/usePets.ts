const catViralata = {
  id: 'viralata',
  name: 'Viralata',
  life_span: '',
  description: '',
  affection_level: 0,
  energy_level: 0,
  intelligence: 0,
  image: {
    url: '',
    height: 0,
    width: 0,
    id: ''
  },
  reference_image_id: ''
}

const dogViralata = {
  id: 0,
  name: 'Viralata',
  life_span: '',
  temperament: '',
  reference_image_id: '',
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
