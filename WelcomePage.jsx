import React from "react"
import "./welcomepage.scss"
import { FaArrowDown } from 'react-icons/fa';

export default function WelcomePage() {
    return (
        <div className="Welcome-page" id="intro">
            <div className="wrapper">
                <h1>Hi, I'm Luka Milanovic,</h1>
                <h1>an aspiring web developer.</h1>

                <button className="welcomebutton" type="button" 
                        onClick={() => {
                        window.location.href='#about';
                        }}> View my work <FaArrowDown className="icon"/></button>
                        </div>
        </div>
    )
        
}