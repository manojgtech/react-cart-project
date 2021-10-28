import React,{useState,useContext} from 'react'
import Header from './Header'
import ProductsContext from './Productcontext'
import Product from "./Product"
import CartContext from './Cartcontext'
export default function Store(props) {
    const prodcontext=useContext(ProductsContext);
   
    const [cartdata,setCart]=useContext(CartContext);
    const [filter,setfilter]=useState(0);
    const renderProducts=()=>{
        let prods=prodcontext.products;
        if(filter!=0){
          prods=prodcontext.products.filter(function(item){return item.price<parseInt(filter)});  
        }
        return(
            prods.map((product)=>{
                return(<Product key={product.id} item={product}  />);
            })
        );
        
    }
   function  catProduct(e){
       setfilter(e.target.value);
   }
    return (
        <div>
           
            <Header items={(cartdata.length==0) ? 0 :cartdata.length} />
            <h1 className="text-center">Store</h1>
            <select name="category" className="form-control" style={{width:'150px'}} onChange={(e)=>catProduct(e)}>
            <option value="">filter product</option>
             <option value="100">below 100</option>
              <option value="200">below 200</option> 
              <option value="300">above 200</option>
            </select>
            <div className="row">
            {renderProducts()}
            </div>
           
        </div>
    )
}
