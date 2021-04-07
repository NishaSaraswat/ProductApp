import styled from 'styled-components';
import {Link} from "react-router-dom";

export const PageWrapper = styled.section`
    padding: 1.5em;
    background-color: papayawhip;
    text-align: center;
`


export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
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
    background:  palevioletred;
    color: white;
`;

// Styling Components from other Libraries, such as this example, styling a React Router DOM Link
export const StyledReactLink = styled(Link)` 
    color: white;
`