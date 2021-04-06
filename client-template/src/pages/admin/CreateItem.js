import React, {useState} from 'react';
import {Link,useHistory} from 'react-router-dom';


 function CreateItem() {
   
   const [item, setItem] = useState({});
   const history = useHistory();

   const handleChange=(e)=>{
     e.preventDefault();
    const name = e.target.name
    setItem({
      ...item,
      [name]: e.target.value
      
    })
    }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        await fetch('http://localhost:5000/products/',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
          body:JSON.stringify(item)
        });
        history.push('/manage-products');
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
    <h1>Create New Product</h1>
    <form onSubmit={handleSubmit}>
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
        <button>Create</button>
        <br/><br/>
        {/* <Link to="/manage-products">Back</Link> */}

    </form>
    </>
  );
}
export default CreateItem
