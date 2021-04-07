import React from 'react';
import facebookLogo from '../pictures/facebook.png'
import instagramLogo from '../pictures/instagram-icon.jpeg'
import youtubeLogo from '../pictures/YouTube-icon.png'
import whatsupLogo from '../pictures/whatsapp-icons.jpeg'
import twitter from '../pictures/twitter-icon.png'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {FooterIconsWrapper,FooterIcons,FooterContainer} from '../itemsStyles'

const Footer = () => {
    const list = {
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        },
      }
      const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }
    return (
      <FooterContainer style={{position: 'absolute', left: 0, right: 0,  bottom:0}}>
            <FooterIconsWrapper 
                initial="hidden"
                animate="visible"
                variants={list}>
                <motion.li variants={item}><a href="http://www.facebook.com"><FooterIcons src={facebookLogo} alt="Facebook" className="footer-icon"/></a></motion.li>
                <motion.li variants={item}><a href="http://www.twitter.com"><FooterIcons src={twitter} alt="Twitter" className="footer-icon"/></a></motion.li>
                <motion.li variants={item}><a href="http://www.youtube.com"><FooterIcons src={youtubeLogo} alt="Youtube"className="footer-icon"/></a></motion.li>
                <motion.li variants={item}><a href="http://www.instagram.com"><FooterIcons src={instagramLogo} alt="Instagram"className="footer-icon"/></a></motion.li>
                <motion.li variants={item}><a href="https://www.whatsapp.com/"><FooterIcons src={whatsupLogo} alt="Whatsup"className="footer-icon"/></a></motion.li>
            </FooterIconsWrapper>
            <p>Copy right @ copy right 2021</p>
      </FooterContainer>
    )
}

export default Footer


