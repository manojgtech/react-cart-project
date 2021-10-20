import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import Store from './Store';
  import Cart from './Cart'; 
export default function Routes() {
    return (
        <div>
           
            <Switch>
                <Route exact path="/" component={Store} />
                <Route path="/cart" component={Cart} />
                
            </Switch>
            
        </div>
    )
}
