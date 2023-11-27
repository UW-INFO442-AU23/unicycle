import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const { t } = useTranslation();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setIsDropdownOpen(false);
    changeLanguage(option);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/Home" aria-label={t('nav-bar.link.home')}>
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
              <NavLink to="/Home" aria-label={t('nav-bar.link.home')}>{t('nav-bar.home')}</NavLink>
            </li>
            <li>
              <NavLink to="/GarbageBank" aria-label={t('nav-bar.link.bank')}>{t('nav-bar.bank')}</NavLink>
            </li>
            <li>
              <NavLink to="/EventSubscriptionForm" aria-label={t('nav-bar.link.join-us')}>{t('nav-bar.join-us')}</NavLink>
            </li>
            <li>
              <div className="custom-select-wrapper">
                <div className={`custom-select ${isDropdownOpen ? 'open' : ''}`}>
                  <div className="selected-option" onClick={handleToggleDropdown}>
                    {t('nav-bar.language')}
                    <div className="arrow"></div>
                  </div>
                  {isDropdownOpen && (
                    <div className="options">
                      <div className="option" onClick={() => handleOptionClick('en')}>
                        English
                      </div>
                      <div className="option" onClick={() => handleOptionClick('zh')}>
                        中文
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;