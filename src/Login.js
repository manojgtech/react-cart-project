import React,{useEffect,useReducer,useContext} from 'react'
import {
   Link
  } from "react-router-dom";
   import CartContext from './Cartcontext'
  import Header from './Header'
  const actiontypes={
	  LOGIN:'login'
  }
 
  function reducer(state,action){
	 switch(action.type){
      case 'login':
	       if(state.username=="ravi" && state.password=="123456"){
	        return {...state,login_error:'loggin success'}
		   }else{ 
			   return  {...state,login_error:'invalid user credential'} 
		   }
	   break;
	   case 'setfield':
	   
		return {...state,[action.field.name]:action.field.value};
	   break;
	   case 'seterror':
	   return {...state,[action.error_field]:action.error}
	default:
		return state;

	 }		 
	  
  } 

 
export default function Login(props) {
	const [state,dispatch] =useReducer(reducer,{username:'',password:'',username_error:'',password_error:'',login_error:''});
	const [cartdata,setCart]=useContext(CartContext);
	const submitform=(event)=>{
		event.preventDefault();
		if(state.username==""){
		dispatch({type:'seterror',error_field:'username_error',error:'Username is required'});
	 }
	 if(state.password==""){
		dispatch({type:'seterror',error_field:'password_error',error:'Password is required'});
	 }
	 if(state.username!="" && state.password!=""){
	  dispatch({type:'seterror',error_field:'password_error',error:''});
		dispatch({type:'seterror',error_field:'username_error',error:''});
		dispatch({type:'login'});
	 }
		return false;
	}
	
    return (
	<>
	  <Header items={(cartdata.length==0) ? 0 :cartdata.length} />
        <div className="well text-center" style={{width:'30%',marginTop:'150px', marginLeft:'auto',marginRight:'auto'}}>
		<h3>Login</h3>
        <form className="form" onSubmit={submitform} >
			{state.login_error}
		<div className="form-group">
		<label>
		Username 
		</label>
		<input type="text" name="username"  value={state.username} onChange={(e)=>dispatch({type:'setfield',field:e.target})} className="form-control"   placeholder="username" />
			<p className="alert alert-warning">{state.username_error}</p>
		</div>
		<div className="form-group">
		<label>
		Password
		</label>
		<input type="password" name="password" value={state.passworde} onChange={(e)=>dispatch({type:'setfield',field:e.target})} className="form-control"  placeholder="password" />
		<p className="alert alert-warning">{state.password_error}</p>
		</div>
		<div className="form-group">
		<button type="submit"  className="btn btn-primary">Login</button>
		</div>
		</form> 
<p><Link to="/">Home</Link></p>		
        </div>
</>		
    )
}