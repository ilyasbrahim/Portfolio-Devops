// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import MainPage from './MainPage'; // Import MainPage component
import reportWebVitals from './reportWebVitals';
import TerminalAnimation from './components/TerminalAnimation';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<TerminalAnimation />} />
        <Route path="/MainPage" element={<MainPage />} /> {/* Add route for MainPage */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


