import './page_css/WelcomeSc.css';
import React, { Component } from 'react';
import Wait from '../SrcFuncCode/Wait'
import { useNavigate } from "react-router-dom";

async function ChangeWeb(navigate,n) {
  if (n.animationName === 'FadeWelcome') {
    await Wait(3, 's')
    var element = document.querySelector('.WelcomeTxt h1')
    element.style.animation = 'SetOutAnim 0.8s cubic-bezier(0.755, 0.050, 0.855, 0.060) both'
  }else if (n.animationName === 'SetOutAnim') {
    await Wait(1,'s')
    navigate("/MyWeb-Learn-/Home")
  }
}
function Welcome() {
  let navigate = useNavigate();
  return (
    <>
      <body>
        <div className='WelcomeTxt' id='WelcomeTxt' onAnimationEnd={(n) => ChangeWeb(navigate,n)}>
          <h1>Welcome</h1>
        </div>
      </body>
    </>
  );
}

export default Welcome;
