import React from 'react';
import PropTypes from 'prop-types';

const EachRocket = (props) => {
  const {
    name, description, image, reserved,
  } = props;

  return (
    <>
      <li className="rocketsLi">
        <div className="eachRocketImage">
          <img src={image} alt={name} />
        </div>
        <div className="eachRocketProps">
          <h2 className="eachRocketTitle">{name}</h2>
          <p className="eachRocketTexts">
            {reserved && <span className="isReserved">Reserved</span>}
            {description}
          </p>
          <button type="button" className="reserveRocketButton">Reserve Rocket</button>
        </div>
      </li>
    </>
  );
};

EachRocket.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
}.isRequired;

export default EachRocket;
