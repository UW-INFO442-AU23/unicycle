import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import EventSubscriptionForm from './components/EventSubscriptionForm.js';
import GarbageBank from './components/GarbageBank.js';
import garbages_en from './data/shuffled_Garbage.json';
import garbages_zh from './data/database_CN.json';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App(props) {
    const { i18n } = useTranslation();
    let garbages;
    if ( i18n.language === "en" ) {
      garbages = garbages_en;
    } else 
    if ( i18n.language === "zh" ) {
      garbages = garbages_zh;
    }

    return (
      <div>
        <Router>
            <header>
              <NavBar/>
            </header>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/EventSubscriptionForm" element={<EventSubscriptionForm />} />
            <Route path="/GarbageBank" element={<GarbageBank garbages = {garbages}/>} />
            <Route path="*" element={<Navigate to={"/Home"}/>} />
          </Routes>
          <footer>
            <Footer/>
          </footer>
        </Router> 
      </div>
    );
  }
  