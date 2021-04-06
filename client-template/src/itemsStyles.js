import styled from 'styled-components';
import {Link} from "react-router-dom";

export const NavWrapper=styled.nav`
    display:flex;
    flex-direction: row;
    justify-content: flex-end; 
    width: 95%;
`
export const StyledReactLink = styled(Link)` 
    color: black;
    margin:15px;
    text-decoration:none;
`
export const ItemsWrapper=styled.section`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    width:100%;
    margin-left:3.5%;
`
export const ItemCard=styled.div`
  padding:10px;
  display:flex;
  flex-direction:column;
  flex-wrap: wrap;
  margin:10px;
  background-color: rgb(247, 245, 242);
  justify-content: center;
  text-align: center;
  padding-left: 2%;
`
export const ItemImg=styled.img`
  width:200px;
  height:180px;
  padding-left: 15px;
  padding-top: 10px;
`
export const FooterWrapper=styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10%;
  background-color: rgb(65, 121, 156);
  padding:10px;
  height: 70px;
  color: aliceblue;
`
export const FooterIcons=styled.img`
  width:50px;
  height:50px;
`