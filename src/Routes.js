import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import Store from './Store';
  import Cart from './Cart'; 
  import Login from './Login';
  import Chat from './Chat';
import ProductDetail from './ProductDetail';  
export default function Routes() {
    return (
        <div>
           
            <Switch>
                <Route exact path="/" component={Store} />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
                <Route path="/product/:id" component={ProductDetail} />
                <Route path="/chat" component={Chat} />
            </Switch>
            
        </div>
    )
}
