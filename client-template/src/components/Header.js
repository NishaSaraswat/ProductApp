import React from 'react'

const Header = ({handleChange,handleFilterChange}) => {

    const handleDropDownChange=(e)=>{
        if(e.target.name==="All"){
            handleChange();
        } else {
        handleFilterChange(e.target.value)
        }
    }
    return (
        <nav className="header-nav">
            <span>Products</span>
            <span>Admin</span>
            <select name="categories" onChange={handleDropDownChange}>
                <option value="All">All</option>
                <option value="High-heels">High-heels</option>
                <option value="Sneakers">Sneakers</option>
                <option value="Sandals">Sandals</option>
                <option value="Boots">Boots</option>
            </select>
        </nav>
    )
}

export default Header
