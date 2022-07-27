import React from 'react';
import PropTypes from 'prop-types';
import './DogCard.css';
import { Link } from 'react-router-dom';

export default function DogCard({ name, image, id }) {
  return (
    <Link
      to={`/dog/${id}`}
      className="card-container"
    >
      <div className="card">
        <img className="card-image" src={image} alt={name} />
        <h4 className="card-name">{name}</h4>
      </div>
    </Link>
  );
}

DogCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
