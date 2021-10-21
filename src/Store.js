import React,{useState,useContext} from 'react'
import Header from './Header'
import ProductsContext from './Productcontext'
import Product from "./Product"
import CartContext from './Cartcontext'
export default function Store(props) {
    const prodcontext=useContext(ProductsContext);
   
    const [cartdata,setCart]=useContext(CartContext);
    
    const renderProducts=()=>{
        return(
            prodcontext.products.map((product)=>{
                return(<Product key={product.id} item={product}  />);
            })
        );
        
    }
    return (
        <div>
           
            <Header items={(cartdata.length==0) ? 0 :cartdata.length} />
            <h1 className="text-center">Store</h1>
            <div className="row">
            {renderProducts()}
            </div>
           
        </div>
    )
}
