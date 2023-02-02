import { NavLink } from 'react-router-dom';
import planet from '../../assets/planet.png';
import './NavBar.css';

const NavBar = () => (
  <header id="header">
    <nav id="nav">
      <div id="logo">
        <img id="imagesize" src={planet} alt="App Logo" />
        <p id="logowords">Space Travelers&apos; Hub</p>
      </div>
      <ul id="navlinks">
        <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'navlink')} to="/">Rockets</NavLink></li>
        <li><NavLink className="navlink" to="/missions">Missions</NavLink></li>
        <li id="vertical-divider" />
        <li><NavLink className="navlink" to="myprofile">MyProfile</NavLink></li>
      </ul>
    </nav>
    <div id="horizontal-divider" />
  </header>
);

export default NavBar;
