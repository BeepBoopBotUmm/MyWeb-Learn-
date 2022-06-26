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
        <Route path="/MyWeb-Learn-" element={ <Welcome/> } />
        <Route path='/MyWeb-Learn-/Home' element={<Home/>} />
        <Route path='/MyWeb-Learn-/About' element={<About_me />}/>
        <Route path='/MyWeb-Learn-/Project' element={<Project />}/>
      </Routes>
    </>
  );
}

export default App;
