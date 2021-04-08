import styled from 'styled-components';
import {Link} from "react-router-dom";
import {motion} from 'framer-motion';


export const NavWrapper=styled(motion.nav)`
    display:flex;
    flex-direction: row;
    justify-content: flex-end; 
    background-color:rgba(0, 0, 0, 0.86);
    padding-right:20px;
`
export const StyledReactLink = styled(Link)` 
    color: white;
    margin:15px;
    text-decoration:none;
    font-size: 1.5em;
    font-weight:bold;
    text-align: center;
    color:  rgba(242, 153, 74, 1) ;
`
export const ItemsWrapper=styled(motion.section)`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
`
export const ItemCard=styled(motion.div)`
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
export const AddToCartInput=styled.input`
  text-align:center;
  height:23px;
`
export const AddToCartButton=styled.button`
  margin-top:10px;
  background-color:green;
  height:30px;
  color:white;
  font-weight:bold;
`
export const LinkToDetail=styled(Link)`
  text-decoration:none;
  color:white
`
export const FooterContainer=styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  background-color: rgba(0, 0, 0, 0.86);
  text-align:center;
  color:white;
  margin-bottom:0;
  left:0;
  right:0
`
export const FooterIconsWrapper=styled(motion.footer)`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  height: 40px;
  padding-top:18px;
  color:white;
  list-style:none;
`
export const FooterIcons=styled.img`
  width:35px;
  height:35px;
  margin-right:50px;
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
  margin-left:6%;
  margin-right:3%;
  width:30%;
  border-radius:20%;
  margin-top:60px;
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
