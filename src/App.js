import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Product from './components/Product';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route exact path="/details" component={Details}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
