import styled from 'styled-components'


export const Actiondiv = styled.div`
  display:flex;
   justify-content:center;
   a{
      text-decoration:none;
      color:black;
     }
     textarea{
      border-radius:10px;
      width:100%;
      padding: 8px 8px;
      margin-bottom:5px;
      margin-top:5px;
     }
     select{
      border-radius:10px;
      width:105%;
      margin-bottom:5px;
      margin-top:5px;
      padding: 8px 8px;

     }
     
 `
export const UpdateButton = styled.button`
background:white;
color: rgba(79, 79, 79, 1);

font-size: 1em;
font-weight:bold;
margin-left:10%;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 5px;
margin-bottom:40px;
font-family:Verdana;
  
`;
export const CreateButton = styled(UpdateButton)``;
export const Label = styled.label`
  font-size: 1em;
  color: white;
  font-family:Verdana;
  text-align:center;
  font-weight:bold;
 
   `;
export const Input = styled.input`

border-radius:10px;
width:100%;
margin-bottom:5px;
margin-top:5px;
padding: 8px 8px;
`