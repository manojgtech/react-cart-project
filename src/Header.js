import React from 'react'
import {
   Link
  } from "react-router-dom";
export default function Header(props) {
    return (
        <div>
           <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">Shop</Link>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><Link to="/">Home</Link></li>
      
      <li><Link to="/cart">Cart({props.items})</Link></li>
      
    </ul>
  </div>
</nav> 
        </div>
    )
}
