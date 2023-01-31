import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/missions/missions';

const Missions = () => {
  const mission = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <>
      <h1>Missions</h1>
      {mission.loading && <h1>loading....</h1>}
      {mission.loading && mission.error ? (
        <div>
          Error:
          {mission.error}
        </div>
      ) : null}
    </>
  );
};

export default Missions;
