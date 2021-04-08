// VG del
import React, { useState, useEffect } from "react";
import {useHistory } from "react-router-dom";
import Form from "../../components/Form";
import styled from 'styled-components';
import {motion} from 'framer-motion';

import {PageWrapper} from '../../createUpdateStyle'

function UpdateItem({ match }) {
  const [item, setItem] = useState({});
  const history = useHistory();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/products/" + match.params.id
      );
      const data = await response.json();

      setItem(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    setItem({
      ...item,
      [name]: e.target.value,
    });
  };
  console.log(item);
  const  handleSubmit= async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/products/" + item._id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      //redirection
      history.push("/manage-products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PageWrapper>
      <Title
      initial={{
          x:-100,
          y:-50,
          opacity:0,
          color:'#FFFFFF'

      }}
      animate={{
        x:0,
        y:0,
        opacity:1,
        color:'#DCD427',
        rotate:360
      }}
      transition={{
        delay:1,
        duration:2,
        ease:"backInOut"
      }}
      >Update Product</Title>

      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        item={item}
        pageId="update-item"
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
export default UpdateItem;
