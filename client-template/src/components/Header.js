import React from 'react'

const Header = ({handleChange}) => {
    const handleDropDownChange=(e)=>{
        console.log(e.target.value)
        handleChange(e.target.value)
    }
    return (
        <nav className="header-nav">
            <span>Products</span>
            <span>Admin</span>
            <select name="categories" onChange={handleDropDownChange}>
                <option value="High-heels">High-heels</option>
                <option value="Sneaker">Sneakers</option>
                <option value="Sandals">Sandals</option>
                <option value="Boots">Boots</option>
            </select>
        </nav>
    )
}

export default Header
