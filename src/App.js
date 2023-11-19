import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import EventSubscriptionForm from './components/EventSubscriptionForm.js';
import Error from './components/Error.js';
import GarbageBank from './components/GarbageBank.js';
import garbages from './data/shuffled_Garbage.json';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

export default function App(props) {
    return (
      <div>
        <Router>
            <header>
              <NavBar/>
            </header>
          <Routes>
            <Route path="/Home" element={<Home/>} />
            <Route path="/GarbageBank" element={<GarbageBank garbages = {garbages}/>} />
          </Routes>
          <footer>
            <Footer/>
          </footer>
        </Router> 
      </div>
    );
  }
  