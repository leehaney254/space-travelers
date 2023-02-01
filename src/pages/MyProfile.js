import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const profilemission = useSelector((state) => state);
  const display = profilemission.missions.filter((mission) => mission.reserved === true);

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
            <tr>
              <td> Falcon 9</td>
            </tr>
          </tbody>
        </Table>
      </aside>
    </main>
  );
};

export default MyProfile;
