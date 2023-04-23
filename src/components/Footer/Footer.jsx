import React from 'react'
import "./Footer.css"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"


const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div className='footer-container'>
            <div className='blur blur-footer'></div>
            <hr />
            <div className='footer'>
                <div className='social-logos'>
                    <img src={instagram} alt="insta_logo"></img>
                    <img src={linkedin} alt="linkedin_logo"></img>
                </div>
            </div>
            <div className='copyright'>
                <span>copyright @ {year}</span>
            </div>
        </div>

    )
}

export default Footer