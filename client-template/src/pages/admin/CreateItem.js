import React, { useState } from "react";
import {useHistory } from "react-router-dom";
import Form from "../../components/Form";

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
    <>
      <h1>Create New Product</h1>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        item={item}
      />
      
    </>
  );
}
export default CreateItem;
