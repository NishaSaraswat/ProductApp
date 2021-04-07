// VG del
import React, { useState, useEffect } from "react";
import {useHistory } from "react-router-dom";
import Form from "../../components/Form";
import styled from 'styled-components'

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
    <Wrapper>
      <Title>Update Product</Title>

      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        item={item}
        pageId="update-item"
      />
      
    </Wrapper>
  );
}
const Title = styled.h1`
  font-size: 1.8em;
  text-align: center;
  color: white;
  font-family:Verdana;
   `;

const Wrapper = styled.section`
background:rgba(0, 0, 0, 0.86);
height:100vh;
`;

export default UpdateItem;
