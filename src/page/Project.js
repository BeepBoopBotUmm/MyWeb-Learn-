import './page_css/Project.css';
import React, { Component } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AddStyle from '../SrcFuncCode/AddStyle'

async function MouseEnterButt(){
    var element = document.querySelector('.HomeButt button')
    AddStyle(element,'animation','OnWidgetRotate 1 100ms linear')
    AddStyle(element,'animation-fill-mode','forwards')
}

async function MouseLvButt(){
    var element = document.querySelector('.HomeButt button')
    AddStyle(element,'animation','OffWidgetRotate 1 100ms linear')
    AddStyle(element,'animation-fill-mode','forwards')
}

async function GobackHome(navigate){
    navigate('/Home')
}

function Project() {
    let navigate = useNavigate()
    return (
        <>
            <body>
                <section className='HomeButt'>
                    <button onMouseEnter={() =>  MouseEnterButt()} onMouseLeave={() => MouseLvButt()} onClick={() => GobackHome(navigate)}>Home</button>
                </section>
                <section className='Info'>
                    <h1>My Current Project</h1>
                </section>
            </body>
        </>
    )
}

export default Project