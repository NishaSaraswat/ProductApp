import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';
import {
    CreateButton,
    DeleteButton,
    UpdateButton,
    Td1,
    StyledReactLink
} from '../styles.js';

function Product({ item, deleteProduct }) {
        let pDate = new Date(item.date);
    

    return (
        <>
            <tr>
                    <Td1>{item.title}</Td1>
                    <Td1>{item.price} kr</Td1>
                    <Td1>{item.stock} pc.</Td1>
                    <Td1>{item.category}</Td1>
                    <Td1>{`${pDate.getFullYear()}-${pDate.getMonth()}-${pDate.getDate()}`}</Td1>
                    <Td1><Link to={`/update-item/${item._id}`}><UpdateButton>Update</UpdateButton></Link></Td1>
                    <Td1><a href="##" onClick={()=>deleteProduct(item)}><DeleteButton>Delete</DeleteButton></a></Td1>
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
