import { breedsCatTranslation } from '~/constants/breeds-cat-translation'
import type { CatBreed } from '~/utils/entities/cat-breeds'

export const useCatBreeds = () => {
  const config = useRuntimeConfig()

  const { data: breeds, error, pending, status } = useFetch(config.public.catBaseURL, {
    headers: {
      'x-api-key': config.public.catApiKey
    },
    lazy: false,
    server: false,
    transform: (breeds: CatBreed[]) => {
      return breeds.map((breed: CatBreed) => ({
        id: breed.id,
        name: translateWord(breedsCatTranslation, breed.name),
        image: breed.image,
        life_span: breed.life_span,
        intelligence: breed.intelligence,
        affection_level: breed.affection_level,
        energy_level: breed.energy_level,
        reference_image_id: breed.reference_image_id,
      }))
    }
  })

  return {
    breeds,
    error,
    pending,
    status
  }
}
