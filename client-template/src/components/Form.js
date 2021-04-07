import React from "react";
import { Link} from "react-router-dom";
import styled from 'styled-components'

function Form({ handleSubmit,handleChange, item, pageId}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title:</label> <br />
        <input
          type="text"
          name="title"
          value={item.title || ""}
          onChange={handleChange}
        ></input>
        <br /> <br />
        <label>Price:</label> <br />
        <input
          type="text"
          name="price"
          value={item.price || ""}
          onChange={handleChange}
        ></input>
        <br /> <br />
        <label>Stock:</label> <br />
        <input
          type="text"
          name="stock"
          value={item.stock || ""}
          onChange={handleChange}
        ></input>
        <br /> <br />
        <label>Picture</label>
        <br />
        <input
          type="text"
          name="image"
          value={item.image || ""}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label>Description</label> <br />
        <textarea
          name="description"
          value={item.description || ""}
          rows="10"
          cols="30"
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <select
          name="category"
          value={item.category || ""}
          onChange={handleChange}
        >
          <option value="kids">Kids</option>
          <option value="women">Women</option>
          <option value="sports">Sports</option>
          <option value="men">Men</option>
        </select>
        <br />
        <br />
        <Actiondiv>
        <Button>{pageId==="update-item" ? "Update":"Create"}</Button>
           <br />
            <br />
         <Button><Link to="/manage-products">&larr;Back</Link></Button>
         </Actiondiv>
      </form>
    </div>
  );
}
const Actiondiv = styled.div`
  display:flex;
   justify-content:center;
   a{
      text-decoration:none;
      color:black;
     }
 `
const Button = styled.button`
background: ${props => props.primary ? "white" : "white"};
color: ${props => props.primary ? "rgba(79, 79, 79, 1)" :"rgba(79, 79, 79, 1)"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 5px;
font-family:Verdana;
  
`;

export default Form;
