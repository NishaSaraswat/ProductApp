import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    return (
        <nav className="header-nav">
            <span><Link to='/'>Products</Link></span>
            <span><Link to='/manage-products'>Admin</Link></span>
        </nav>
    )
}

export default Header
