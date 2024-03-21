import { temperamentsTranslation } from '~/constants/temperaments-translation'
import { breedsDogTranslation } from '~/constants/breeds-dog-translation'

export interface DogBreed {
  id: string
  name: string
  life_span: string
  reference_image_id: string
  temperament: string
  image: { url: string }
}

export const useFetchDogs = () => {
  const config = useRuntimeConfig()

  const defautPage = ref(0)
  const defaultLimit = ref(70)

  const getDogs = async(limit: number = defaultLimit.value, page: number = defautPage.value) => {
    const breeds: DogBreed[] = await $fetch(`${config.public.dogBaseURL}?limit=${limit}&page=${page}`, {
      headers: {
        'x-api-key': config.public.dogApiKey
      }
    })

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

  return {
    getDogs,
    defautPage,
    defaultLimit,
  }
}
