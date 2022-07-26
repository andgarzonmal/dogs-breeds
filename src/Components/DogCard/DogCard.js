import React from 'react';
import PropTypes from 'prop-types';
import './DogCard.css';

export default function DogCard({ name, image }) {
  return (
    <div className="card">
      <h4 className="card-name">{name}</h4>
      <img className="card-image" src={image} alt={name} />
    </div>
  );
}

DogCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
