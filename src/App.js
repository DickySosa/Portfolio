import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about-me' element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
