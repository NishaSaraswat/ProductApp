
import React, {useState, useEffect} from 'react';
import ProductList from '../../components/ProductList';
import {Link} from 'react-router-dom';
import {
    PageWrapper,
    Title
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
 
  //  return (
  //      <PageWrapper>
  //          <Title>Manage Product</Title> 
  //          <ProductList 
  //              products={products} 
  //              deleteProduct={deleteProduct}
  //          />
  //      </PageWrapper>
  //  )

return (
    <>
    <div>
    <Title>Manage Product</Title>
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          <ProductList items={items} deleteProduct ={deleteProduct}/>
          </tbody>
        </table>
        <Link to="/create-item">Create New Product</Link>
      </div>
    </>
  );



}

export default ManageItems