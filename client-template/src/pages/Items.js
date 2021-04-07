import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {ItemsWrapper,ItemCard,ItemImg,LinkToDetail, AddToCart} from "../itemsStyles"

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

    const ItemsVariants = {
        start: { opacity: 0, scale:0.2 },
        stop: { 
            opacity: 1,
            scale:1,
            transition: { 
                duration: 1,
        }
    }
    }

    return (
        <>
            <ItemsWrapper
                initial={'start'}
                animate={'stop'}
                variants={ItemsVariants}
            
            >
                {items.map((item)=>(
                    <ItemCard key={item._id}>
                        <ItemImg src={item.image} alt={item.title} className="item-img"/>
                        <h4>{item.title}</h4>
                        <b>{item.price} kr</b>
                        <br/>
                        <AddToCart>
                            <input type="text" defaultValue = '1'/>
                            <button>Add to Cart</button>
                        </AddToCart>
                        <p>In stock</p>
                        <br/>
                        <LinkToDetail to={`/products/${item._id}`}>Read more...</LinkToDetail>
                        <br/>
                    </ItemCard>
                ))}
            </ItemsWrapper>
        </>
    )
}

export default Items

