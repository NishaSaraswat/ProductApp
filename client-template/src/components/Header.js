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
                <option value="Women">Women</option>
                <option value="Men">Men</option>
                <option value="Kids">Kids</option>
                <option value="Sports">Sports</option>
            </select>
        </nav>
    )
}

export default Header
