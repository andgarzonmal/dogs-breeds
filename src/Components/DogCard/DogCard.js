import React from 'react';
import PropTypes from 'prop-types';
import './DogCard.css';
import { Link } from 'react-router-dom';

export default function DogCard({ name, image, id }) {
  return (
    <Link
      to={`/dog/${id}`}
    >
      <div className="card">
        <h4 className="card-name">{name}</h4>
        <img className="card-image" src={image} alt={name} />
      </div>
    </Link>
  );
}

DogCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
