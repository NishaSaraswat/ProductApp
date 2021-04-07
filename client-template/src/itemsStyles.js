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
    font-size: 1.5em;
    font-weight:bold;
    text-align: center;
    color: rgb(255, 99, 71);
`
export const ItemsWrapper=styled(motion.section)`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    width:100%;
    /*background-color:rgba(0, 0, 0, 0.86)*/
`
export const ItemCard=styled.div`
  width:23%;
  margin-left:10px;
  margin-bottom:10px;
  padding:5px;
  display:flex;
  flex-direction:column;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.86);
  color:white;
  justify-content: center;
  text-align: center;
`
export const ItemImg=styled.img`
  width:250px;
  height:250px;
  padding-left:8%;
  margin-top:10px;
  padding-top:5px;
`
export const AddToCart=styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;
  text-align:center;
`
export const LinkToDetail=styled(Link)`
  text-decoration:none;
  color:white
`
export const FooterWrapper=styled(motion.footer)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.86);
  padding:10px;
  height: 70px;
  color:white;
  list-style:none;
`
export const FooterIcons=styled.img`
  width:50px;
  height:50px;
`

export const ItemWrapper=styled.div`
  background-color:black;
  color:white;
`
export const ItemInput=styled.input`
  width:85%;
  margin-left: 5%;
  margin-top: 50px;
  height:36px;
  background-color:lightgrey;
  border-radius:2%;
`

export const ProductDetail=styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.86);
  color:white;
  padding:15px;
`

export const ItemDetailImg=styled(motion.img)`
  margin-left:20px;
  margin-right:40px;
  width:30%;
  border-radius:55%;
  margin-top:40px;
  margin-bottom:20px;
`
export const ItemDetailText=styled(motion.div)`
  margin-top:40px;
  margin-right:20px;
  padding:25px;
  width:55%;
  display:flex;
  flex-direction:column;
`