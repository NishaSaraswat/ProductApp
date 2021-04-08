import React from "react";
import { Link} from "react-router-dom";
import{Actiondiv,UpdateButton,CreateButton,Label,Input} from '../formStyle.js'
import {motion} from 'framer-motion';
import{pageVariants} from '../createpageAnimation.js'


function Form({ handleSubmit,handleChange, item, pageId}) {
  return (
    <motion.div
    initial={'hidden'}
      animate={'visible'}
      variants={pageVariants}
    >
     <Actiondiv>
      <form onSubmit={handleSubmit}>
        <Label>Title:</Label> <br />
        <Input
          type="text"
          name="title"
          value={item.title || ""}
          onChange={handleChange}
        ></Input>
        <br /> <br />
        <Label>Price:</Label> <br />
        <Input
          type="text"
          name="price"
          value={item.price || ""}
          onChange={handleChange}
        ></Input>
        <br /> <br />
        <Label>Stock:</Label> <br />
        <Input
          type="text"
          name="stock"
          value={item.stock || ""}
          onChange={handleChange}
        ></Input>
        <br /> <br />
        <Label>Picture:</Label>
        <br />
        <Input
          type="text"
          name="image"
          value={item.image || ""}
          onChange={handleChange}
        ></Input>
        <br />
        <br />
        <Label>Description:</Label> <br />
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
        >Select Category
          <option value="kids">Kids</option>
          <option value="women">Women</option>
          <option value="sports">Sports</option>
          <option value="men">Men</option>
        </select>
        <br />
        <br />
       
        <UpdateButton>{pageId==="update-item" ? "Update":"Create"}</UpdateButton>
         <CreateButton><Link to="/manage-products">&larr;Back</Link></CreateButton>
        
      </form>
      </Actiondiv>
    </motion.div>
  );
}

export default Form;
