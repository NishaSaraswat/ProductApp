// VG del
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Form from "../../components/Form";

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
  const updateProduct = async (e) => {
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
    <>
      <h1>Update Product</h1>

      <Form
        updateProduct={updateProduct}
        handleChange={handleChange}
        item={item}
      />
      <button onClick={updateProduct}>Update</button>
      <br />
      <br />
      <Link to="/manage-products">Back</Link>
    </>
  );
}
export default UpdateItem;
