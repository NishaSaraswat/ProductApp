import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {NavWrapper, StyledReactLink} from '../itemsStyles';

const Header = () => {
    return (
        <NavWrapper 
        initial={{x: '-100vw'}}
        animate={{
            x: 0,
            y:0,
            transition: { ease: "easeOut", duration: 1}
    }}>
            <StyledReactLink to='/'>Products</StyledReactLink>
            <StyledReactLink to='/manage-products'>Admin</StyledReactLink>
        </NavWrapper>
    )
}

export default Header

