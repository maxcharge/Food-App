import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import SingleItem from "./components/SingleItem/SingleItem";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Form/Login";
import Cart from './components/Cart/Cart'


function App({ current,isLogin }) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          { <Route path="/*" component={Login} />}
          <Route exact path="/Food-App" component={Welcome} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/cart" component={Cart} />
          {!current  ? (
            <Redirect to="/products" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
    isLogin: state.shop.user.isLogin
  };
};

export default connect(mapStateToProps)(App);
