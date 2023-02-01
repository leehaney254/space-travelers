import { useSelector } from 'react-redux';
import MissionTable from '../components/MissionTable/MissionTable';
import './Mission.css';

const Missions = () => {
  const mission = useSelector((state) => state.mission);

  return (
    <div id="spacing">
      {mission.loading && <h1>loading....</h1>}
      {!mission.loading && mission.error ? (
        <div>
          Error:
          {mission.error}
        </div>
      ) : null}
      {!mission.loading && mission.missions.length ? <MissionTable /> : null}
    </div>
  );
};

export default Missions;
