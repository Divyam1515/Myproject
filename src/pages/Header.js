import React from 'react';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Action from './headercomponets/Action';
import About from '../pages/headercomponets/About';
import Anotheraction from '../pages/headercomponets/Anotheraction';
import Career from '../pages/headercomponets/Career';
import ContactUS from './headercomponets/Contact.js';
import Help from '../pages/headercomponets/Help';
import Home from '../pages/headercomponets/Home';
import Services from './headercomponets/Career';
import ErrorPage from '../pages/headercomponets/ErrorPage'


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact US</Link>
              </li>
              <li className="nav-item">
                <Link to="/career" className="nav-link">Career</Link>
              </li>
              <li className="nav-item">
                <Link to="/help" className="nav-link">Help</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/action" className="dropdown-item">Action</Link></li>
                  <li><Link to="/anotheraction" className="dropdown-item">Another action</Link></li>
                  <li><Link to="/RandomURL" className="dropdown-item">Error Page</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='*' element={<ErrorPage />}></Route>
        <Route path='' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact' element={<ContactUS />}></Route>
        <Route path='/career' element={<Career />}></Route>
        <Route path='/help' element={<Help />}></Route>
        <Route path='/help' element={<Help />}></Route>
        <Route path='/action' element={<Action />}></Route>
        <Route path='/anotheraction' element={<Anotheraction />}></Route>
      </Routes>

    </>
  );
}
export default Header;