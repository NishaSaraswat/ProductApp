import React,{useState,useEffect} from 'react'
import Header from '../components/Header';
import {Link} from 'react-router-dom'

const Item = ({match}) => {
    console.log(match.params.id)
    const itemId=match.params.id
    const [item, setItem]=useState({});
    useEffect(()=>{
        fetchData()
    },[])
    
    const fetchData=async ()=>{
        const response=await fetch(`http://localhost:5000/products/${itemId}`)
        const data=await response.json()
        setItem(data)
    }
    return (
       <>
        <Header />
        <div className="item-path-detail">
            <input type="text" value={`products/${item.title}`}></input>
            <button><Link to ='/'>back</Link></button>
        </div>
        <div className="product-item">
            <img src={item.image} alt={item.title} className="item-img"/>
            <div className="product-detail">
                <h2>{item.title}</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/4_stars.svg/1024px-4_stars.svg.png" alt="rating stars" className="rating-stars"/>
                <span>{item.price}kr</span>
                <br/>
                <span>Stock: {item.stock}</span>
                <br/>
                <div className="add-to-cart">
                        <input type="number"value="1" />
                        <button>Add to Cart</button>
                </div>
                <span>Category: {item.category}</span>
                <p>Description: {item.description}</p>
            </div>
        </div>
       </>
    )
}
export default Item

