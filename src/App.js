import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import PlaceOrder from './components/PlaceOrder'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log(process.env.REACT_APP_KLARNA_BASE_URL)
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/products" render={props => <ProductList {...props} />} />
        <Route path="/products/:id" render={props => <ProductDetails {...props} />} />
        <Route path="/cart" render={props => <Cart {...props} />} />
        <Route path="/place-order" render={props => <PlaceOrder {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
