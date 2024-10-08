

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import MainPage from './MainPage'; 
import reportWebVitals from './reportWebVitals';
import TerminalAnimation from './components/TerminalAnimation';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<TerminalAnimation />} />
        <Route path="/MainPage" element={<MainPage />} /> {}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


