
import React, {useState, useEffect} from 'react';
import ProductList from '../../components/ProductList';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {
    PageWrapper,
    Title,
    Citem,
    Tr1,
    Table
} from '../../styles.js';

function ManageItems() {
    const [items, setItems] = useState([]);
    
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
            // setProducts(data);
            setItems(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async (item) => {
        try {
            await fetch(`http://localhost:5000/products/${item['_id']}`, 
            {
                method: 'DELETE', // GET, POST, PATCH, DELETE
            });
        } catch (message) {
            throw new Error(message);
        }

        fetchProducts();
    }

return (
    <>
    <PageWrapper>
    <div>
    <Title>Manage Product</Title>
        <Table>
          <tbody>
            <Tr1>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Date</th>
              <th>Action</th>
              <th>Action</th>
            </Tr1>
          <ProductList items={items} deleteProduct ={deleteProduct}/>
          </tbody>
        </Table>
        <br>
        </br>
        <Link to="/create-item"><Citem>Create New Product</Citem></Link>
      </div>
     </PageWrapper>
    </>
  );



}

export default ManageItems