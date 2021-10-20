import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import Header from './Header';
import  {ProductsProvider} from './Productcontext'
import { CartProvider } from './Cartcontext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Store from './Store';

function App() {
  return (
    <div className="App">
      <Router>
     <ProductsProvider>
       <CartProvider>
      <Routes />
      </CartProvider>
     </ProductsProvider>
</Router>
    </div>
  );
}

export default App;
