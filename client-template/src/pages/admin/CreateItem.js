import React, { useState } from "react";
import {useHistory } from "react-router-dom";
import Form from "../../components/Form";
import {PageWrapper} from '../../createUpdateStyle';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import{pageVariants} from '../../createpageAnimation.js'



function CreateItem() {
  const [item, setItem] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    setItem({
      ...item,
      [name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      history.push("/manage-products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PageWrapper>
      <Title
      initial={'hidden'}
      animate={'visible'}
      variants={pageVariants}
      
      >Create New Product</Title>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        item={item}
      />
      
    </PageWrapper>
  );
}
export const Title = styled(motion.h1)`
  font-size: 1.8em;
  color: white;
  margin-bottom:40px;
  font-family:Verdana;
  margin-top:0px;
  box-sizing:borderbox;
   `;
export default CreateItem;
