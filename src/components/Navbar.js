import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const toggleBar = document.getElementById('toggleBar');
const slider = document.getElementById('slider');

// toggleBar.addEventListener('click', () => {
//     // Toggle the state
//     const isOn = toggleBar.classList.toggle('on');

//     // Move the slider based on the state
//     if (isOn) {
//         slider.style.transform = 'translateX(30px)';
//     } else {
//         slider.style.transform = 'translateX(0)';
//     }
// });

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
          {/* <div className={'languageSettings'}/> */}
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/WasteBank">Waste Bank</NavLink>
            </li>
            <li>
              <NavLink to="/EventSubscriptionForm">Join Us</NavLink>
            </li>
            <li>
                <div class="language-toggle">
                    <div class="label">EN</div>
                    <div class="toggle-bar" id="toggleBar">
                        <div class="slider" id="slider"></div>
                    </div>
                    <div class="label">CN</div>
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