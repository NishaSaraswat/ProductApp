import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';
import {
    CreateButton,
    DeleteButton,
    StyledReactLink
} from '../styles.js';

function Product({ item, deleteProduct }) {
        let pDate = new Date(item.date);
    

    return (
        <>
            <tr>
                    <td>{item.title}</td>
                    <td>{item.price} kr</td>
                    <td>{item.stock} pc.</td>
                    <td>{item.category}</td>
                    <td>{`${pDate.getFullYear()}-${pDate.getMonth()}-${pDate.getDate()}`}</td>
                    <td><Link to={`/update-item/${item._id}`}>Update </Link></td>
                    <td><a href="##" onClick={()=>deleteProduct(item)}> Delete</a></td>
                </tr>
             </>   
            
    );
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
