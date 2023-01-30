import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Rockets from './pages/Rockets';
import Mission from './pages/Missions';
import MyProfile from './pages/MyProfile';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
