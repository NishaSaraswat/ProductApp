import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Header from '../components/Header';

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
            <Header />
            <div className="items-wrapper">
                {items.map((item)=>(
                    <div className="item-card" key={item._id}>
                        <img src={item.image} alt={item.title} className="item-img"/>
                        <h4>{item.title}</h4>
                        <b>{item.price}</b>
                        <br/>
                        <div className="add-to-cart">
                        <input type="text" defaultValue = '1'/>
                        <button>Add to Cart</button>
                        </div>
                        <p>In stock</p>
                        <br/>
                        <Link to={`/products/${item._id}`}><span>Read more...</span></Link>
                        <br/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Items
