import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MaterialUI from './MaterialUI';
import Npm from './Npm';
import './App.css';

export default function App() {
  return (
            <>
              <Router>

              <div className = "App-header">
              <ul>
                <li className = "mod">
                  <Link to="/">Home</Link>
                </li>
                <li className = "mod1">
                  <Link to="/MaterialUI">MaterialUI</Link>
                </li>
                <li className = "mod2">
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
      
  );
}


