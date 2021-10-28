import React,{useState,useContext} from 'react'
import './App.css';
import CartContext from './Cartcontext'
import ProductsContext from './Productcontext'
import Header from './Header'
import Modal from 'react-modal';
import {
   Link
  } from "react-router-dom";
export default function ProductDetail(props) {
    
    const [cartdata,setCart]=useContext(CartContext);
	const prodcontext=useContext(ProductsContext);
	 const [popupflag,openPopup]=useState(false);
//   const addItem=()=>{
//       setCart([...cartdata,props]);
//   }
	let product=prodcontext.products.filter((item)=>item.id==props.match.params.id);
	const addItem=(e,item)=>{
        console.log(cartdata);
         setCart(cartdata.map((x) =>
          x.id === item.id ? { ...item, qty: x.qty + 1 } : x
        ));
		 console.log(cartdata);
     }
     const delItem=(e,item)=>{
              
         let exist=cartdata.find((x)=>x.id==item.id);
         
         if(exist.qty>1){
         setCart(cartdata.map((x) =>
          x.id === item.id ? { ...item, qty: x.qty -1 } : x
        ));
        }else{
          setCart(cartdata.filter((x) =>x.id != item.id ));  
        }
        
     } 
   
     const closeModal=()=>openPopup(false);
    const quickview=()=>openPopup(true);
    const afterOpenModal=()=>{ console.log('ddd')};
    return (
	  <>
	  <Header items={cartdata.length}/>
	  <div className="container">
	  <div className="row">
	  <div className="col-md-7">
	  <h1>{product[0].name}</h1>
	  <h3 className="text-primary"> Price :<span className="badge">{product[0].price}$</span></h3>
	  <p>{product[0]. desription}</p>
	  </div>
	  <div className="col-md-5">
	  
	  <img src={product[0].photo} className="img-thumbnail" alt={product[0].name} style={{width:'80%'}} onClick={()=>quickview()} />
	  <p><button onClick={(e)=>addItem(e,product[0])} className="btn btn-primary">Add to Cart</button></p>
	  </div>
	  </div>
	  </div>
	  <Modal
        isOpen={popupflag}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <p><button  className="btn btn-danger pull-right" onClick={()=>closeModal()}>close</button></p>
	  <img src={product[0].photo} className="img-responsive" alt={product[0].name} style={{width:'100%'}} />
     
      </Modal>
	  </>
    )
}
