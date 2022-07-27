import { PropTypes } from 'prop-types';
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import './Dog.css';

export default function Dog({ dogs }) {
  const params = useParams();
  const allDogs = [...dogs];
  const dog = allDogs.filter((dog) => dog.id === params.id);

  return (
    <div className="document-container">
      <div className="document">
        <div>
          <Link
            to="/"
            className="back-to-menu-dog"
          >
            <i className="simbol">
              <BiArrowBack />
            </i>
          </Link>
          <h1 className="dog-name-dog">{dog[0].name}</h1>
        </div>
        <img id="document-image" src={dog[0].image} alt={dog[0].name} />
        <h1 className="dog-title">Height</h1>
        <div className="height">
          <div>
            <h3>Height in inches</h3>
            <p>
              from
              {' '}
              {dog[0].imperialHeight[0]}
              {' '}
              inches to
              {' '}
              {dog[0].imperialHeight[1]
                ? dog[0].imperialHeight[1]
                : parseInt(dog[0].imperialHeight[0], 10) + 8}
              {' '}
              inches
              {' '}
            </p>
          </div>
          <div>
            <h3>Height in centimeters</h3>
            <p>
              {'from '}
              {`${dog[0].metricHeight[0]} `}
              {'centimeters to '}
              {' '}
              {dog[0].metricHeight[1]
                ? dog[0].metricHeight[1]
                : parseInt(dog[0].metricHeight[0], 10) + 5}
              {' '}
              centimeters
              {' '}
            </p>
          </div>
        </div>
        <div className="weight">
          <h1 className="dog-title">Weight</h1>
          <div>
            <h3>Weight in pounds</h3>
            <p>
              from
              {' '}
              {dog[0].imperialWeight[0]}
              {' '}
              pounds to
              {' '}
              {dog[0].imperialWeight[1]}
              {' '}
              pounds
              {' '}
            </p>
          </div>
          <div>
            <h3>Height in kilograms</h3>
            <p>
              from
              {' '}
              {dog[0].metricWeight[0]}
              {' '}
              kilograms to
              {' '}
              {dog[0].metricWeight[1]}
              {' '}
              kilograms
              {' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Dog.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
