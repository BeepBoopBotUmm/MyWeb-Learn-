import './App.css';
import React, { Component } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from './page/Home'
import Welcome from './page/WelcomeSc'
import About_me from './page/About_me';
import Project from './page/Project';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Welcome/> } />
        <Route path='/Home' element={<Home/>} />
        <Route path='/About' element={<About_me />}/>
        <Route path='/Project' element={<Project />}/>
      </Routes>
    </>
  );
}

export default App;
