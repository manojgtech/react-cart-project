import React,{useState} from 'react';
import { dummyProducts } from './dummy.js'
const CartContext = React.createContext();

const CartProvider=(props)=>{
    const [cartdata,setCart]=useState([]);
   
 return(
    
  <CartContext.Provider value={[cartdata,setCart]}>
      {props.children}
  </CartContext.Provider>
 );

}

export default CartContext;
export {CartProvider}
