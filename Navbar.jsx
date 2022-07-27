import React from 'react'
import "./navbar.scss"
import {Phone, Email} from "@material-ui/icons"

export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className ="logo">MyPortfolio</a>
                    <div className="itemContainer">
                        <Phone className="icon" />
                        <span>+46 70 790 1840</span>
                    </div>
                    <div className="itemContainer">
                        <Email className="icon" />
                        <span>luka.milanovic@rocketmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="dropNavMenu" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
