import './assets/mpm-styles.css'

import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import TitleBar from './layouts/TitleBar'
import NavBar from './layouts/NavBar'

import Home from './pages/Home'
import Profiles from './pages/Profiles/Profiles'
import Profile from './pages/Profiles/Profile';
import About from './pages/About/About'
import Tasks from './pages/Tasks/Tasks'

function App() {
  const [kittehs, setKittehs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data/cats.json');
        if (response.ok) {
          const result = await response.json();
          setKittehs(result.cats);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (e) {}
    }
    fetchData();
  }, []);

  return (
    <>
    <TitleBar kittehs={kittehs}/>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home kittehs={kittehs}/>} />
      <Route path="/profiles" element={<Profiles kittehs={kittehs}/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
    </>
  );
}

export default App
