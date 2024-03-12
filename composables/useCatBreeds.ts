export interface Image {
  id: string
  width: number
  height: number
  url: string
}

export interface CatBreed {
  id: string
  name: string
  life_span: string
  intelligence: number
  affection_level: number
  energy_level: number
  reference_image_id: string
  image: Image
  description: string
}

export const useCatBreeds = async() => {
  const config = useRuntimeConfig()
  const { data: breeds, error, pending, status } = await useFetch(config.public.catBaseURL, {
    headers: {
      'x-api-key': config.public.catApiKey
    },
    server: false,
    transform: (breeds: CatBreed[]) => {
      return breeds.map((breed: CatBreed) => ({
        id: breed.id,
        name: breed.name,
        image: breed.image,
        life_span: breed.life_span,
        intelligence: breed.intelligence,
        affection_level: breed.affection_level,
        energy_level: breed.energy_level,
        reference_image_id: breed.reference_image_id,
        description: breed.description
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
