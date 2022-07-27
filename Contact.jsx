import React, { useState } from "react";
import "./contact.scss"

export default function Contact() {
    const [message, SetMessage] = useState(false)

    const handleSubmit = (e)=> {
        
        e.preventDefault();
        SetMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/contact.jpg" alt=""/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button className="submitbutton" type="submit">Send</button>
                    {message && <span>Sent!</span>}
                </form>
            </div>
        </div> 
    )
        
}