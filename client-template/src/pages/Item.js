import React,{useState,useEffect} from 'react'

const Item = ({match}) => {
    console.log(match.params.id)
    const itemId=match.params.id
    const [item, setItem]=useState({});
    useEffect(()=>{
        fetchData()
    },[])
    async function fetchData(){
        const response=await fetch(`http://localhost:5000/products/${itemId}`)
        const data=await response.json()
        setItem(data)
    }
    return (
        <div >
            <img src={item.image} alt={item.title} className="item-img"/>
            
            <h5>{item.title}</h5>
            <span>{item.price}</span>
            <span>{item.stock}</span>
            <br/>
            <div className="add-to-cart">
                    <input type="number"value="1" />
                    <button>Add to Cart</button>
            </div>
            <span>{item.category}</span>
            <p>{item.description}</p>
        </div>
    )
}
export default Item

