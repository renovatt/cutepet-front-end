export interface DogBreed {
  id: number
  name: string
  life_span: string
  reference_image_id: string
  temperament: string
}

export const useDogBreeds = () => {
  const config = useRuntimeConfig()
  const { data: breeds, error, pending, status } = useFetch(config.public.dogBaseURL, {
    headers: {
      'x-api-key': config.public.dogApiKey
    },
    lazy: false,
    server: false,
    transform: (breeds: DogBreed[]) => {
      return breeds.map((breed: DogBreed) => ({
        id: breed.id,
        name: breed.name,
        life_span: breed.life_span,
        temperament: breed.temperament,
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
