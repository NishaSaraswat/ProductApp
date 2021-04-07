import React from 'react'
import Product from './Product'

function ProductList({ products, deleteProduct }) {
    return (
        <div>
            {
                products.map( Product => (
                    <Product key={Product['_id']} product={Product} deleteProduct={deleteProduct} />
                )) 
            }
        </div>
    )
}

export default ProductList
