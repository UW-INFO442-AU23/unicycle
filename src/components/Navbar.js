import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const toggleBar = document.getElementById('toggleBar');
const slider = document.getElementById('slider');

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/Home">
          <h1>UNiCycle</h1>
          </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <div className={`bar ${showNavbar ? 'open' : ''}`} />
          <div className={`bar ${showNavbar ? 'open' : ''}`} />
          <div className={`bar ${showNavbar ? 'open' : ''}`} />
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/GarbageBank">Garbage Bank</NavLink>
            </li>
            <li>
              <NavLink to="/EventSubscriptionForm">Join Us</NavLink>
            </li>
            <li>
                <div className="language-toggle">
                    <div className="label">EN</div>
                    <div className="toggle-bar" id="toggleBar">
                        <div className="slider" id="slider"></div>
                    </div>
                    <div className="label">CN</div>
                </div>
                <script src={toggleBar}></script>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;