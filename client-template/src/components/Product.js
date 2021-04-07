import React from 'react';

import styled from 'styled-components';
import {
    CreateButton,
    DeleteButton,
    StyledReactLink
} from '../styles.js';

function Product({ product, deleteProduct }) {

    const handleDeleteBtn = () => {
        deleteProduct(product['_id']);
    }

    return (
        <ProductArticle>
            <p>
                {product.content}
                <br />
            </p>
            {/* 
                Make sure to send the punId in the URL, in combination with setting the <Route path="/update-pun/:id"> in App.js 
                This will ensure that UpdatePun.js gets hold of the punId, through the variable "match"
            */}

            <ActionDiv>
                <StyledReactLink to={`/update-product/${product['_id']}`}><CreateButton>Update</CreateButton></StyledReactLink>
                <DeleteButton onClick={handleDeleteBtn}>Delete</DeleteButton>
            </ActionDiv>
        </ProductArticle>
    )
}


const ProductArticle = styled.article`
    display: flex;
    justify-content: space-between;
    width: 80%;
`

const ActionDiv = styled.div`
    ${'' /* display: flex; */}
    ${'' /* align-items: center; */}

    a {
        text-decoration: none;
    }
`


export default Product
