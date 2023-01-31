import { useSelector } from 'react-redux';

const Missions = () => {
  const mission = useSelector((state) => state);

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
