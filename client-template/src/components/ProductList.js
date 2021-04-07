import React from 'react'
import Product from './Product.js'

function ProductList({ items, deleteProduct }) {
    return (
        <>
            {
                items.map( item => {

                        return(
                            <Product key={item._id} item={item} deleteProduct={deleteProduct}/>
                        )
                })
            }
        </>
    );
}

export default ProductList
