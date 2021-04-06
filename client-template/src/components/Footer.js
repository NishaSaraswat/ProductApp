import React from 'react';
import facebookLogo from '../pictures/facebook.png'
import instagramLogo from '../pictures/instagram-icon.jpeg'
import youtubeLogo from '../pictures/YouTube-icon.png'
import whatsupLogo from '../pictures/whatsapp-icons.jpeg'
import twitter from '../pictures/twitter-icon.png'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {FooterWrapper,FooterIcons} from '../itemsStyles'

const Footer = () => {
    return (
        <>
            <FooterWrapper className="icons-container">
                <a href="http://www.facebook.com"><FooterIcons src={facebookLogo} alt="Facebook" className="footer-icon"/></a>
                <a href="http://www.twitter.com"><FooterIcons src={twitter} alt="Twitter" className="footer-icon"/></a>
                <a href="http://www.youtube.com"><FooterIcons src={youtubeLogo} alt="Youtube"className="footer-icon"/></a>
                <a href="http://www.instagram.com"><FooterIcons src={instagramLogo} alt="Instagram"className="footer-icon"/></a>
                <a href="https://www.whatsapp.com/"><FooterIcons src={whatsupLogo} alt="Whatsup"className="footer-icon"/></a>
                <p>Copy right @ copy right 2021</p>
            </FooterWrapper>
        </>
    )
}

export default Footer
