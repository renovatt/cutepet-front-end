export type Schedule = {
  id: string;
  status: 'PENDING' | 'FINISHED' | 'CANCELED';
  pet: 'CAT' | 'DOG';
  petname: string;
  age: string;
  weight: string;
  sex: string;
  service: string;
  date: Date;
  time: string;
  observation: string;
  breed: {
    id: string;
    name: string;
    image: {
      url: string;
    };
  };
}
