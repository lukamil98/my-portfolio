import React from "react"
import "./about.scss"
import { MdSpeed, MdPhonelink } from 'react-icons/md';
import { FaRegLightbulb } from 'react-icons/fa';
import { IoRocketOutline } from 'react-icons/io5';
// import Aos from "aos";
// import "aos/dist/aos.css";


export default function About() {
    return (
    <div className="about" id="about">
        <h1 className="titleabout">ABOUT</h1>
            <div className="cards-div">
                <div className="card">
                    <div>
                    <MdSpeed size={56} />
                    </div>
                    <h1 className="cardtitle">Fast</h1>
                    <p>Fast load times and lag free interaction, my highest priority.</p>
                </div>
                <div className="card">
                    <div>
                    <MdPhonelink size={56}/>
                    </div>
                    <h1 className="cardtitle">Responsive</h1>
                    <p>Layouts will work on any device, big or small.</p>
                </div>
                <div className="card" id="3rd">
                    <div>
                    <IoRocketOutline size={56} />
                    </div>
                    <h1 className="cardtitle">Dynamic</h1>
                    <p>Making sure that there is action going on and not having a static page.</p>
                </div>
                <div className="card">
                    <div>
                    <FaRegLightbulb size={56} />
                    </div>
                    <h1 className="cardtitle">Intuitive</h1>
                    <p>Keeping it simple with intuitive UX/UI.</p>
                </div>
                
            </div>
            <div className="lowerAbout">
            <div className="left">
                <div className="imgContainer">
                    <img className="picOfMe "src="./assets/me.png" alt="" />
                </div>
            </div>
            <div className="right">
            <div className="description">
                    <h1>So who am I?</h1>
                    <p>I'm a self taught 23 years old front end developer who aspires to become great at this and find a job soon.
                        Always willing to learn new things and trying my best to improve day by day.
                    </p>
                </div>
            </div>
            </div>
    </div>
    )
        
}