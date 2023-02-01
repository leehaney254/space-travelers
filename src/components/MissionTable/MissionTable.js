import Table from 'react-bootstrap/Table';
import { Button, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MissionTable = () => {
  const table = useSelector((state) => state);

  return (
    <Table striped bordered hover id="tablespace">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {table.missions.map((mission) => (
          <tr key={mission.id}>
            <td>{mission.name}</td>
            <td>{mission.descrption}</td>
            <td>
              <Stack direction="horizontal" gap={3}>
                <Button variant="secondary">Not A Member</Button>
                {' '}
                <Button variant="light">Join Mission</Button>
                {' '}
              </Stack>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MissionTable;
