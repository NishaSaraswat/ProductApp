import React from 'react';
import facebookLogo from '../pictures/facebook.png'
import instagramLogo from '../pictures/instagram-icon.jpeg'
import youtubeLogo from '../pictures/YouTube-icon.png'
import whatsupLogo from '../pictures/whatsapp-icons.jpeg'
import twitter from '../pictures/twitter-icon.png'

const Footer = () => {
    return (
        <>
            <div className="icons-container">
                <a href="http://www.facebook.com"><img src={facebookLogo} alt="Facebook" className="footer-icon"/></a>
                <a href="http://www.twitter.com"><img src={twitter} alt="Twitter" className="footer-icon"/></a>
                <a href="http://www.youtube.com"><img src={youtubeLogo} alt="Youtube"className="footer-icon"/></a>
                <a href="http://www.instagram.com"><img src={instagramLogo} alt="Instagram"className="footer-icon"/></a>
                <a href="https://www.whatsapp.com/"><img src={whatsupLogo} alt="Whatsup"className="footer-icon"/></a>
                <p>Copy right @ copy right 2021</p>
            </div>
        </>
    )
}

export default Footer
