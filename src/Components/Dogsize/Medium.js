import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { displayMediumDogs } from '../../Redux/dogs';
import DogCard from '../DogCard/DogCard';
import './DogSize.css';

export default function Medium() {
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
    dispatch(displayMediumDogs());
  }, []);

  return (
    <div className="all-content-container">
      <div className="all-header">
        <h1>All Medium Breeds Here</h1>
        <img id="medium-dog-all" src="https://github.com/andgarzonmal/programa/blob/master/png-clipart-border-collie-rough-collie-bearded-collie-puppy-puppy-animals-carnivoran-thumbnail-removebg-preview.png?raw=true" alt="medium Dog" />
      </div>
      <form>
        <Link
          to="/"
          className="back-to-menu"
        >
          <i className="simbol">
            <BiArrowBack />
          </i>
        </Link>
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
