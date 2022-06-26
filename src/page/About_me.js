import './page_css/About_me.css';
import React, { Component } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AddStyle from '../SrcFuncCode/AddStyle'

let Ig = require('../Image/Instagram_Logo.png')

let Icon = {
    'Instagram' : require('../Image/Instagram_Logo.png'),
    'Twitter' : require('../Image/Twitter Logo.png'),
    'Discord' : require('../Image/DiscordLogo.png'),
    'Roblox' : require('../Image/Roblox Logo.png')
}

let IconProp = {
    'Instagram' : {
        'MainSize' : '750px',
        'Leftm' : '35%',
        'Top' : '0px'
    },
    'Discord' : {
        'MainSize' : '750px',
        'Leftm' : '38%',
        'Top' : '-104px'
    },
    'Twitter' : {
        'MainSize' : '750px',
        'Leftm' : '38%',
        'Top' : '-100px'
    },
    'Roblox' : {
        'MainSize' : '750px',
        'Leftm' : '38%',
        'Top' : '5px'
    }
}

async function ChangeImg(IconToFind){
    console.log('Enter')
    var element = document.querySelector('.ImageDisplay img')
    element.src = Icon[IconToFind]
    element.style.visibility = 'visible'
    AddStyle(element,'margin-left',IconProp[IconToFind]['Leftm'])
    AddStyle(element,null,IconProp[IconToFind]['MainSize'],true)
    AddStyle(element,'top',IconProp[IconToFind]['Top'])
    element.style.animation = 'SetImage 1 0.3s linear'
}

async function HideImg(){
    console.log('s')
    var element = document.querySelector('.ImageDisplay img')
    element.style.animation = 'HideImg 1 0.3s linear'
}
async function VisIt(n){
    console.log('get')
    if (n.animationName === 'HideImg') {
        var element = document.querySelector('.ImageDisplay img')
        element.style.visibility = 'hidden'
        console.log('set to h')
    }
}

async function MouseEnterButt(){
    var element = document.querySelector('.Title button')
    AddStyle(element,'animation','OnWidgetRotate 1 100ms linear')
    AddStyle(element,'animation-fill-mode','forwards')
}

async function MouseLvButt(){
    var element = document.querySelector('.Title button')
    AddStyle(element,'animation','OffWidgetRotate 1 100ms linear')
    AddStyle(element,'animation-fill-mode','forwards')
}

async function GobackHome(navigate){
    navigate('/Home')
}
function About_me() {
    let navigate = useNavigate();
    return (
        <>
            <body>
                <section className='Title'>
                    <button onMouseEnter={() =>  MouseEnterButt()} onMouseLeave={() => MouseLvButt()} onClick={() => GobackHome(navigate)}>Home</button>
                </section>
                <div className='ImageDisplay'>
                    <img src={require('../Image/Instagram_Logo.png')} onAnimationEnd={(n) => VisIt(n)} />
                </div>
                <section className='Social_Media'>
                    <strong><h2>Social Media</h2></strong>
                    <ul>
                        <li>
                            <a href='https://www.instagram.com/ye._.ke/'><img src={Icon['Instagram']} onMouseEnter={() => ChangeImg('Instagram')} onMouseLeave={() => HideImg()} /></a>
                        </li>
                        <li>
                            <a href='https://discord.com/channels/@me/921257023675445320'><img src={Icon['Discord']} onMouseEnter={() => ChangeImg('Discord')} onMouseLeave={() => HideImg()} /></a>
                        </li>
                        <li>
                            <a href='https://twitter.com/ImborednowI'><img src={Icon['Twitter']} onMouseEnter={() => ChangeImg('Twitter')} onMouseLeave={() => HideImg()} /></a>
                        </li>
                    </ul>
                </section>
                <section className='Game'>
                    <strong><h2>Game</h2></strong>
                    <ul>
                        <li>
                            <a href='https://www.roblox.com/users/1704673117/profile'><img src={Icon['Roblox'] } onMouseEnter={() => ChangeImg('Roblox')} onMouseLeave={() => HideImg()} /></a>
                        </li>
                    </ul>
                </section>
            </body>
        </>
    )
}

export default About_me