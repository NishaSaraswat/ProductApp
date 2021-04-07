
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';


const Button = styled.button `
    border: none;
    background-color: #fff;
    color: blue;
    &:hover {
        cursor: pointer;
    }
`

const ButtonField = styled.td`
    width: calc(100% - 900px);
    border: 1px solid black;
`

function ManageItems() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async() => {
        try {
            const response = await fetch('http://localhost:5000/products');
            if (!response.ok) {
                throw new Error('HTTP Error! status: ' + response.status);
            }
            const data = await response.json();
            setProducts(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async (productID) => {
        try {
            await fetch('http://localhost:5000/products/' + productID, {
                method: 'DELETE', // GET, POST, PATCH, DELETE
            });
        } catch (message) {
            throw new Error(message);
        }

        fetchProducts();
    }
 
return(
    <>
    <h1>Manage Product</h1>
     <ul>
          {products.map(item => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p> 
            </li>
          ))}
          <div>
                    <ButtonField>
                        <Link to={`/update-products/${products['_id']}`}><Button>Update</Button></Link>|
                        <Button onClick={deleteProduct}>Delete</Button>
                    </ButtonField>
          </div>
    </ul>
    </>
)



}

export default ManageItems