import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displaySmallDogs } from '../../Redux/dogs';
import DogCard from '../DogCard/DogCard';
import './DogSize.css';

export default function Small() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);
  const [input, setInput] = useState('');

  const filterDogs = dogs.filter((dog) => {
    let filterdog;
    if (input === '') {
      filterdog = dog;
    } if (dog.name.includes(input.toLowerCase())) {
      filterdog = dog;
    }
    return filterdog;
  });

  useEffect(() => {
    dispatch(displaySmallDogs());
  }, []);

  return (
    <div className="all-content-container">
      <h1>All Small Breeds Here</h1>
      <form>
        <input
          type="text"
          placeholder="Search breed here..."
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div className="cards-container">
        {filterDogs.map((dog) => (
          <DogCard
            key={dog.id}
            id={dog.id}
            name={dog.name}
            image={dog.image}
          />
        ))}
      </div>
    </div>
  );
}
