import './page_css/Home.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <body>
        <section className='TopBar'>
          <ul>
            <Link to='/Home'><li>Home</li></Link>
            <Link to='/About'><li>About me</li></Link>
            <Link to='/Project'><li>Project</li></Link>
          </ul>
        </section>
        <div className='Perkenalan'>
          <h1>
            Hello My Name  <h2> Is <strong> 11ucihha00</strong> </h2>
          </h1>
          <p>
            I am a game developer. Examples of games that I developed <strong><a href='https://www.roblox.com/games/8815373768/Easy-difficulty-obby-Update'>Easy difficulty obby</a></strong> in <strong><a href='https://www.roblox.com/home'>Roblox</a></strong> <br />
            Besides that I am also a Beginner programmer And there is still much more I need to learn<br />
            in order to reach to a more successful point.
            </p>
        </div>
        <div className='Programlan'>
          <u><h1>Programming Language</h1></u>
          <ul>
            <li><strong>Html</strong></li>
            <li><strong>Css</strong></li>
            <li><strong>Javascript</strong></li>
            <li><strong>etc.</strong></li>
          </ul>
        </div>
      </body>
    </>
  );
}

export default Home;
