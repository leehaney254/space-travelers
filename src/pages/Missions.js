import { useSelector } from 'react-redux';
import MissionTable from '../components/MissionTable/MissionTable';

const Missions = () => {
  const mission = useSelector((state) => state);

  return (
    <>
      <h1>Missions</h1>
      {mission.loading && <h1>loading....</h1>}
      {!mission.loading && mission.error ? (
        <div>
          Error:
          {mission.error}
        </div>
      ) : null}
      <MissionTable />
      {!mission.loading && mission.length ? <MissionTable /> : null}
    </>
  );
};

export default Missions;
