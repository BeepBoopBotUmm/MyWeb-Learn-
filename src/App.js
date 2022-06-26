import './App.css';
import React, { Component } from 'react';
import { Routes, Route, useNavigate,useLocation } from "react-router-dom"
import Home from './page/Home'
import Welcome from './page/WelcomeSc'
import About_me from './page/About_me';
import Project from './page/Project';
import Potraitmode from './page/Potraitmode'
import Nav from './SrcFuncCode/Nav'

function App() {
  let navigate = useNavigate()
  let StandLocation = ''
  let AlrChange = false
  const location = useLocation()
  let portrait = window.matchMedia("(orientation: portrait)");
  portrait.addEventListener("change", function(e) {
    if(e.matches) {
      Nav(navigate,'/Potrait')
      console.log('Change to potrait')
      if (StandLocation !== '/Potrait'){
        StandLocation = location.pathname.replace('/MyWeb-Learn-','')
        AlrChange = true
      }
    } else {
      console.log('in landscape')
      if (AlrChange === true){
        Nav(navigate,StandLocation)
      }
    }
  })
  return (
    <>
      <Routes>
        <Route path="/MyWeb-Learn-" element={ <Welcome/> } />
        <Route path='/MyWeb-Learn-/Home' element={<Home/>} />
        <Route path='/MyWeb-Learn-/About' element={<About_me />}/>
        <Route path='/MyWeb-Learn-/Project' element={<Project />}/>
        <Route path='/MyWeb-Learn-/Potrait' element={<Potraitmode/>}/>
      </Routes>
    </>
  );
}

export default App;
