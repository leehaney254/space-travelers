import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/missions/missions';

const Missions = () => {
  const user = useSelector((state) => state.missionSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  });

  return (
    <h1>This is the Missions.</h1>
  );
};

export default Missions;
