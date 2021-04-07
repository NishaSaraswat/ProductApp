import styled from 'styled-components';
import {Link} from "react-router-dom";

export const PageWrapper = styled.section`
    padding: 1.5em;
    background-color: rgba(0, 0, 0, 0.86);
    text-align: center;
    justify-content: center;
    color:white;
    display:flex;
    flex-direction: row;
    flex_wrap:wrap;
`

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    justify-content: center;
    color: rgb(255, 99, 71);
`

export const Citem = styled(Title)`
    font-size: 0.9em;
    color: rgb(255, 99, 71);
`

export const Tr1 = styled.tr`
    background-color: rgb(255, 99, 71);
`

export const Table = styled.table`
    border:1px solid white;
    text-align: center;
    justify-content: center;
    margin-left:auto;
    margin-right:auto;
`

export const CreateButton = styled.button`
    /* Adapt the colors based on primary prop */
    background:  white;
    color: palevioletred;

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

export const DeleteButton = styled(CreateButton)`
    background:  rgb(255, 99, 71);
    color: white;
`;

export const UpdateButton = styled(CreateButton)`
    background:  rgb(255, 99, 71);
    color: white;
`;

// Styling Components from other Libraries, such as this example, styling a React Router DOM Link
export const StyledReactLink = styled(Link)` 
    color: white;
`