import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { rocketsAction } from '../redux/rockets/rockets';
import './Rockets.css';
import EachRocket from '../components/EachRocket';

const Rockets = () => {
  const rocketsData = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  const reRender = useRef(true);

  useEffect(() => {
    if (reRender.current) {
      if (rocketsData.length === 0) {
        dispatch(rocketsAction());
        reRender.current = false;
      }
    }
  }, [dispatch, rocketsData.length]);

  return (
    <>
      <div className="rocketsContainer">
        <ul className="rocketsUl">
          {rocketsData.map((rocket) => (
            <EachRocket
              key={rocket.id}
              name={rocket.name}
              description={rocket.description}
              image={rocket.flickr_images}
              id={rocket.id}
              reserved={rocket.reserved}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Rockets;
