
import React, {useState, useEffect} from 'react';
import ProductList from '../../components/ProductList';
import {
    PageWrapper,
    Title
} from '../../styles.js';

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
            // setProducts(data);
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
    <PageWrapper>
    <Title>Manage Product</Title>
    <ProductList 
    products={products} 
    deleteProduct={deleteProduct}
    />
      <div className="product-list">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((products) => (
              <tr key={products._id}>
                <td>{products.title}</td>
                <td>{products.description}</td>
                <td>{products.price}</td>
                <td>{products.stock}</td>
                <td>{products.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );



}

export default ManageItems