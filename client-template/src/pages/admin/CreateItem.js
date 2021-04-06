import React, {useState, useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom'


 function UpdateItem({match}) {
   
   const [item, setItem] = useState({});
   const history = useHistory();

   useEffect (()=>{
        fetchProduct();

  },[]);

  const fetchProduct = async()=>{
    try {
        const response = await fetch('http://localhost:5000/products/'+match.params.id);
        const data = await response.json();
        
        setItem(data);
    } catch (error) {
      console.log(error);
    }
  }
  const handleChange=(e)=>{
    const name = e.target.name
    setItem({
      ...item,
      [name]: e.target.value
      
    });
    }
    console.log(item);
    const updateProduct = async(e)=>{
      e.preventDefault();
      try {
        await fetch('http://localhost:5000/products/'+item._id,{


          method:'PATCH',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(item)

        });
        //redirection
        history.push('/manage-products');
        
      } catch (error) {
        console.log(error);
      }

  }
  return (
    <>
    <h1>Update Product</h1>
    <form onSubmit={updateProduct}>
        <label>Title:</label> <br/>
        <input type='text' name="title" value={item.title||''} onChange={handleChange}></input>
        <br/> <br/>
        <label>Price:</label> <br/>
        <input type='text' name="price" value={item.price||''} onChange={handleChange}></input>
        <br/> <br/>
        <label>Stock:</label> <br/>
        <input type='text' name="stock" value={item.stock||''} onChange={handleChange}></input>
        <br/> <br/>
        <label>Description</label> <br/>
        <textarea name='description' value={item.description||''} rows="10" cols="30" onChange={handleChange}></textarea>
        <br/><br/>
        <select name='category' value={item.category||''} onChange={handleChange}>
            <option  value='kids'>Kids</option>
            <option  value='women'>Women</option>
            <option  value='sports'>Sports</option>
            <option  value='men'>Men</option>
        </select>
        <br/><br/>
        <button>Update</button>
        <br/><br/>
        <Link to="/manage-products">Back</Link>

    </form>
    </>
  );
}
export default UpdateItem
