import { v4 as uuidv4 } from 'uuid';

const getDogsBreeds = async () => {
  try {
    const response = await fetch('https://api.thedogapi.com/v1/breeds?api_key=74416c38-a8ee-431a-a32c-6f4564508e76');
    const dogsData = await response.json();
    const dogs = dogsData.map((dog) => ({
      imperialWeight: dog.weight.imperial.split(' - '),
      metricWeight: dog.weight.metric.split(' - '),
      imperialHeight: dog.height.imperial.split(' - '),
      metricHeight: dog.height.metric.split(' - '),
      name: dog.name.toLowerCase(),
      lifeSpan: dog.life_span,
      image: dog.image.url,
      id: uuidv4(),
    }));
    return dogs;
  } catch (err) {
    throw new Error('data not found');
  }
};

export default getDogsBreeds;
