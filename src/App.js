import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyBioScreen from './components/myBioScreen';
import MyBioEditScreen from './components/myBioEditScreen';
import ResumeViewer from './components/resumeViewer';
import SkillsEditScreen from './components/skillsEditScreen'
import './App.css';
import RatingsScreen from './components/ratingsScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MyBioScreen/>} />
        <Route path="/edit" element={<MyBioEditScreen/>} />
        <Route path="/resume" element={<ResumeViewer/>} />
        <Route path="/skills-edit" element={<SkillsEditScreen />} />
        <Route path="/ratingsScreen" element={<RatingsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
