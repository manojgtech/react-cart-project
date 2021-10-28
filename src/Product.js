import React,{useState,useContext} from 'react'
import './App.css';
import CartContext from './Cartcontext'
import {
   Link
  } from "react-router-dom";
  import Modal from 'react-modal';
export default function Product(props) {
    let {item} =props;
    const [cartdata,setCart]=useContext(CartContext);
    const [popupflag,openPopup]=useState(false);
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
    
    const closeModal=()=>openPopup(false);
    const quickview=()=>openPopup(true);
    const afterOpenModal=()=>{ console.log('ddd')};
    
    return (
    <>
           
        <div className="col-md-4 card" key={item.id}>
             <Link to={"/product/"+item.id}><h2>{item.name}</h2> </Link>
           
            <img src={item.photo} className="img"/>
            <h4>${item.price}</h4>
            <button className="btn btn-primary" onClick={()=>AddProduct()}>Add to Cart</button>
             <button className="btn btn-primary" onClick={()=>quickview()}>Quick view</button>
        </div>
       
        
         <Modal
        isOpen={popupflag}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <p><button  className="btn btn-danger pull-right" onClick={()=>closeModal()}>close</button></p>
      <Quickview item={item} />
      </Modal>
    </>  
    )
}



function Quickview(props){
    let item=props.item;
   return(
   <div className="container">
	  <div className="row">
	  <div className="col-md-7">
	  <h1>{item.name}</h1>
	  <h3 className="text-primary"> Price :<span className="badge">{item.price}$</span></h3>
	  <p>{item.desription}</p>
	  </div>
	  <div className="col-md-5">
	  
	  <img src={item.photo} className="img-thumbnail" alt={item.name} style={{width:'80%'}} />
	  <p><button  className="btn btn-primary">Add to Cart</button></p>
	  </div>
	  </div>
	  </div>
   ); 
    
}