import React,{useState,useContext} from 'react'
import './App.css';
import CartContext from './Cartcontext'
export default function Product(props) {
    let {item} =props;
    const [cartdata,setCart]=useContext(CartContext);
//   const addItem=()=>{
//       setCart([...cartdata,props]);
//   }
  const AddProduct=()=>{
    console.log("cartsin",cartdata)
     const exist = cartdata.find((x) => x.id === item.id);
     
     if(exist){
     setCart(cartdata.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        ));
     console.log(cartdata);
     }else{
         
        setCart([...cartdata, { ...item, qty: 1 }]);  
     }
     
      console.log("cartsafter",cartdata);
  }
    
    return (
        <div className="col-md-4 card" key={item.id}>
            <h2>{item.name}</h2>
           
            <img src={item.photo} className="img"/>
            <h4>${item.price}</h4>
            <button className="btn btn-primary" onClick={()=>AddProduct()}>Add to Cart</button>
        </div>
    )
}
