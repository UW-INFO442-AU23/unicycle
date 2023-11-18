import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import EventSubscriptionForm from './components/EventSubscriptionForm.js';
import Error from './components/Error.js';
import Filter from './components/WasteBank/Fiilter.js';
import Search from './components/WasteBank/Search.js';
import WasteCard from './components/WasteBank/WasteCard.js';
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
          </Routes>
          <footer>
            <Footer/>
          </footer>
        </Router> 
      </div>
    );
  }
  