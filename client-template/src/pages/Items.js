import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Header from '../components/Header';

const Items = () => {
    const [items, setItems]=useState([]);
    useEffect(()=>{
        fetchData()
    },[]);
    
    async function fetchData(){
        const response=await fetch('http://localhost:5000/products');
        const data=await response.json();
        setItems(data);
    }
    
    async function fetchFilterData(filterValue){
        try{
        const response=await fetch('http://localhost:5000/products/'+filterValue);
        const data=await response.json();
        console.log(data)
        const categoryData=data.filter(item=>item.category===filterValue)
        setItems(categoryData);
    } catch(error){
        console.log(error)
    }
    }
    return (
        <>
            <Header handleChange={(filterValue)=>fetchFilterData(filterValue)}/>
            <div className="items-wrapper">
            {items.map((item)=>(
                <div className="item-card">
                    <img src={item.image} alt={item.title} className="item-img"/>
                    <h4>{item.title}</h4>
                    <b>{item.price}</b>
                    <br/>
                    <div className="add-to-cart">
                    <input type="number"value="1" />
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
