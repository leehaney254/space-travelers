import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, unreserveRocket } from '../redux/rockets/rockets';

const EachRocket = (props) => {
  const dispatch = useDispatch();
  const {
    name, description, image, reserved, id,
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
          {
            reserved ? (
              <button type="button" className="unreserveRocketButton" onClick={() => { dispatch(unreserveRocket(id)); }}>Cancel Reservation</button>
            ) : (
              <button type="button" className="reserveRocketButton" onClick={() => { dispatch(reserveRocket(id)); }}>Reserve Rocket</button>
            )
          }
        </div>
      </li>
    </>
  );
};

EachRocket.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  reserved: PropTypes.bool,
  id: PropTypes.string,
}.isRequired;

export default EachRocket;
