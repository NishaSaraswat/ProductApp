import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {ItemInput, StyledReactLink, ItemDetailImg, ProductDetail, ItemDetailText, PageWrapper} from '../itemsStyles'

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
       <PageWrapper>
        <form>
            <ItemInput type="text" value={`products/${item.title}`} />
            <StyledReactLink to ='/'>&#8617;Back</StyledReactLink>
        </form>
        <ProductDetail>
            <ItemDetailImg 
                 src={item.image} 
                 alt={item.title} 
                 initial={{x: '-100vw'}}
                 animate={{
                    x: 0,
                    y:0,
                    transition: { ease: "easeOut", duration: 1}
            }}/>
            <ItemDetailText 
                initial={{x: '100vw'}}
                animate={{
                    x: 0,
                    y:0,
                    transition: { ease: "easeOut", duration: 1}
            }}
                >
                <h2>{item.title}</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/4_stars.svg/1024px-4_stars.svg.png" alt="rating stars" style={{width:'100px', height:'20px',margin:'10px', 'margin-top':'-15px'}}/>
                <br/>
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
            </ItemDetailText>
        </ProductDetail>
       </PageWrapper>
    )
}
export default Item

