import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {ItemsWrapper,ItemCard,ItemImg} from "../itemsStyles"

const Items = () => {
    const [items, setItems]=useState([]);
    useEffect(()=>{
        fetchData()
    },[]);
    
    const fetchData=async()=>{
        const response=await fetch('http://localhost:5000/products');
        const data=await response.json();
        setItems(data);
    }
    
    return (
        <>
           
            <ItemsWrapper>
                {items.map((item)=>(
                    <ItemCard key={item._id}>
                        <ItemImg src={item.image} alt={item.title} className="item-img"/>
                        <h4>{item.title}</h4>
                        <b>{item.price} kr</b>
                        <br/>
                        <div>
                            <input type="text" defaultValue = '1'/>
                            <button>Add to Cart</button>
                        </div>
                        <p>In stock</p>
                        <br/>
                        <Link to={`/products/${item._id}`}><span>Read more...</span></Link>
                        <br/>
                    </ItemCard>
                ))}
            </ItemsWrapper>
        </>
    )
}

export default Items
