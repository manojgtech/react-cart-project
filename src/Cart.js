import React,{useContext} from 'react'
import Header from './Header'
import CartContext from './Cartcontext'

export default function Cart(props) {
    const [cartdata,setCart]=useContext(CartContext);
    console.log("cart",cartdata);
    return (
        <div>
              <Header items={cartdata.length}/>
              <div className="container">
              <div className="row">
              <div className="col-md-8">
            {cartdata.length} item in cart
                {cartdata.length==0 ? <div>no items</div> : <Carttable items={cartdata} /> }
                </div>
                </div>
              </div>
           
        </div>
    )
}


function Carttable(props) {
    let total=props.items.reduce(function(ac,item){
     return ac+item.price*item.qty;
    },0);
     const [cartdata,setCart]=useContext(CartContext);
     const addItem=(e,item)=>{
         console.log("increa",item)
         setCart(cartdata.map((x) =>
          x.id === item.id ? { ...item, qty: x.qty + 1 } : x
        ));
     }
     const delItem=(e,item)=>{
      
        
         let exist=cartdata.find((x)=>x.id==item.id);
          console.log("decr",exist)
         if(exist.qty>1){
         setCart(cartdata.map((x) =>
          x.id === item.id ? { ...item, qty: x.qty -1 } : x
        ));
        }else{
          setCart(cartdata.filter((x) =>x.id != item.id ));  
        }
        
     }  
     
    return (
        <div>
             
            <table className="table table-striped">
            <thead>
            <tr><th>Product</th><th>Price</th><th>Quantity</th><th>action</th></tr>
            </thead>
            <tbody>
            {props.items.map((item)=>{
                return(
                <tr><td>{item.name}</td><td>${item.price}</td><td>{item.qty}</td><td><a onClick={(e)=>addItem(e,item)}>+</a> &nbsp;<a onClick={(e)=>delItem(e,item)}>-</a></td></tr>
                );
            })}
            <tr><td>total</td><td>${total.toFixed(2)}</td></tr>
            </tbody>
            </table>
               
           
        </div>
    );
}
