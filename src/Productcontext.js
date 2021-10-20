import React from 'react';
import { dummyProducts } from './dummy.js'
const ProductsContext = React.createContext();

const ProductsProvider=(props)=>{
 return(
  <ProductsContext.Provider value={{products:dummyProducts}}>
      {props.children}
  </ProductsContext.Provider>
 );

}

export default ProductsContext;
export {ProductsProvider}
