const url = 'https://run.mocky.io/v3/346a35f7-3ad6-4e50-bb85-9c643a19ed13'

export type Schedule = {
  id: string;
  pet: 'dog' | 'cat';
  petname: string;
  breed: {
      id: string;
      name: string;
      reference_image_id: string;
      image: {
          url: string;
      };
  };
  age: string;
  weight: string;
  sex: string;
  service: string;
  date: Date;
  time: string;
  obs: string;
}

export const useSchedules = () => {
  const { data: schedules, error, pending, status } = useFetch(url, {
    lazy: false,
    server: false,
    transform: (schedules: Schedule[]) => {
      return schedules.map((schedule: Schedule) => ({
        id: schedule.petname + schedule.date + schedule.time,
        pet: schedule.pet,
        petname: schedule.petname,
        age: schedule.age,
        weight: schedule.weight,
        sex: schedule.sex,
        date: schedule.date,
        time: schedule.time,
        service: schedule.service,
        obs: schedule.obs,
        breed: {
          id: schedule.breed.id,
          name: schedule.breed.name,
          reference_image_id: schedule.breed.reference_image_id,
          image: {
            url: schedule.breed.image.url
          }
        },
      }))
    }
  })

  return {
    schedules,
    error,
    pending,
    status
  }
}
