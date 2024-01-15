import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import MaterialUI from './MaterialUI';
import Npm from './Npm';
import './App.css';

export default function App() {
  return (
            <>
              <Router>

              <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/MaterialUI">MaterialUI</Link>
                </li>
                <li>
                  <Link to="/Npm">Npm</Link>
                </li>
              </ul>

              <hr />






              <Routes>
              <Route exact path="/MaterialUI" element={<MaterialUI/>} />
              <Route exact path="/Npm" element={<Npm/>} />
              <Route exact path="/" element={<Home/>} />
              </Routes>

              </div>
              </Router>

            </>
      






    // <div className="App">
      
      
    //   <AppRouter />
    // </div>
  );
}


