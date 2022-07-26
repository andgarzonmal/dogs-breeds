import getDogsBreeds from '../services/getDogsBreeds';

// Actions

const DISPLAY_LARGE_SIZE = 'dogs_breeds/dogs/DISPLAY_LARGE_SIZE';
const DISPLAY_MEDIUM_SIZE = 'dogs_breeds/dogs/DISPLAY_MEDIUM_SIZE';
const DISPLAY_SMALL_SIZE = 'dogs_breeds/dogs/DISPLAY_SMALL_SIZE';

// Reducers

const initialState = [];

export const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_LARGE_SIZE:
      return action.payload;

    case DISPLAY_MEDIUM_SIZE:
      return action.payload;

    case DISPLAY_SMALL_SIZE:
      return action.payload;

    default:
      return state;
  }
};

// Action creator

export const displayLargeDogs = () => async (dispatch) => {
  const dogs = await getDogsBreeds();
  const filterDogs = dogs.filter((dog) => dog.metricWeight.length === 2);
  const largeDogs = filterDogs.filter((dog) => parseInt(dog.metricWeight[0], 10) >= 30);

  dispatch({
    type: DISPLAY_LARGE_SIZE,
    payload: largeDogs,
  });
};

export const displaySmallDogs = () => async (dispatch) => {
  const dogs = await getDogsBreeds();
  const filterDogs = dogs.filter((dog) => dog.metricWeight.length === 2);
  const smallDogs = filterDogs.filter((dog) => parseInt(dog.metricWeight[1], 10) <= 10);

  dispatch({
    type: DISPLAY_SMALL_SIZE,
    payload: smallDogs,
  });
};

export const displayMediumDogs = () => async (dispatch) => {
  const dogs = await getDogsBreeds();
  const filterDogs = dogs.filter((dog) => dog.metricWeight.length === 2);
  const smallDogs = filterDogs
    .filter((d) => parseInt(d.metricWeight[1], 10) > 10 && parseInt(d.metricWeight[0], 10) < 30);
  dispatch({
    type: DISPLAY_SMALL_SIZE,
    payload: smallDogs,
  });
};
