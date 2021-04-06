import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {NavWrapper, StyledReactLink} from '../itemsStyles'

const Header = () => {
    return (
        <NavWrapper className="header-nav">
            <StyledReactLink to='/'>Products</StyledReactLink>
            <StyledReactLink to='/manage-products'>Admin</StyledReactLink>
        </NavWrapper>
    )
}

export default Header
