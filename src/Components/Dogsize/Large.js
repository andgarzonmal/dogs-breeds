import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { displayLargeDogs } from '../../Redux/dogs';
import DogCard from '../DogCard/DogCard';
import './DogSize.css';

export default function Large() {
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
    dispatch(displayLargeDogs());
  }, []);

  return (
    <div className="all-content-container">
      <div className="all-header">
        <h1>All Large Breeds Here</h1>
        <img id="large-dog-all" src="https://github.com/andgarzonmal/programa/blob/master/newfoundland-512-removebg-preview.png?raw=true" alt="Large Dog" />
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
          value={input}
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
