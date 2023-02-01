import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const profilemission = useSelector((state) => state.mission);
  const display = profilemission.missions.filter((mission) => mission.reserved === true);

  const profileRockets = useSelector((state) => state.rockets);
  const displayRockets = profileRockets.filter((rocket) => rocket.reserved === true);

  return (
    <main id="profileSpace">
      <aside>
        <h2>My Missions</h2>
        <Table bordered hover>
          <tbody>
            {display.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </aside>
      <aside>
        <h2>My Rockets</h2>
        <Table bordered hover>
          <tbody>
            {displayRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </aside>
    </main>
  );
};

export default MyProfile;
