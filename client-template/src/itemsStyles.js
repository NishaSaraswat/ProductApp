import styled from 'styled-components';
import {Link} from "react-router-dom";
import {motion} from 'framer-motion';

export const NavWrapper=styled(motion.nav)`
    display:flex;
    flex-direction: row;
    justify-content: flex-end; 
    background-color:black;
`
export const StyledReactLink = styled(Link)` 
    color: white;
    margin:15px;
    text-decoration:none;
    font-size: 1.3em;
    text-align: center;
    color: rgb(255, 99, 71);
`
export const ItemsWrapper=styled(motion.section)`
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
  background-color: rgba(0, 0, 0, 0.86);
  padding:10px;
  height: 70px;
`
export const FooterIcons=styled.img`
  width:50px;
  height:50px;
`

export const PageWrapper=styled.div`
  background-color:black;
  color:white;

`
export const ItemInput=styled.input`
  width:80%;
  margin-left: 5%;
  margin-top: 50px;
  height:36px;
`

export const ProductDetail=styled.div`
  display:flex;
  flex-direction: row;
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.86);
  color:white;
`

export const ItemDetailImg=styled(motion.img)`
  margin-left:50px;
  height:300px;
  width:300px;
  border-radius:40%;
  margin-top:50px;
  margin-bottom:100px;

`
export const ItemDetailText=styled(motion.div)`
  margin-top:50px;
  margin-right:20px;
  padding:20px;
  width:60%;
`