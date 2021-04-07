// VG del
import React, { useState, useEffect } from "react";
import {useHistory } from "react-router-dom";
import Form from "../../components/Form";
import {PageWrapper,Title} from '../../createUpdateStyle'

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
      <Title>Update Product</Title>

      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        item={item}
        pageId="update-item"
      />
      
    </PageWrapper>
  );
}
export default UpdateItem;
