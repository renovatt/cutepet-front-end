import { temperamentsTranslation } from '~/constants/temperaments-translation'
import { breedsDogTranslation } from '~/constants/breeds-dog-translation'
import type { DogBreed } from '~/utils/entities/dog-breeds'

export const useDogBreeds = () => {
  const config = useRuntimeConfig()
  const limit = ref(70)

  const { data: breeds, error, pending, status } = useFetch(config.public.dogBaseURL, {
    headers: {
      'x-api-key': config.public.dogApiKey
    },
    lazy: false,
    server: false,
    query: {
      limit
    },
    transform: (breeds: DogBreed[]) => {
      return breeds.map((breed: DogBreed) => ({
        id: translateWord(breedsDogTranslation, breed.name),
        name: translateWord(breedsDogTranslation, breed.name),
        life_span: breed.life_span,
        temperament: translateWord(temperamentsTranslation, breed.temperament ?? ''),
        reference_image_id: breed.reference_image_id,
        image: {
          url: `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`
        },
      }))
    }
  })

  const handleLimitSize = () => {
    limit.value += 30
  }

  return {
    breeds,
    error,
    pending,
    status,
    handleLimitSize,
    limit
  }
}
