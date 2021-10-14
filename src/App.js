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
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Form/Login";


function App({ current,isLogin }) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Welcome} />
          {isLogin ? (
            <>
              <Route exact path="/home" component={Products} />
              <Route exact path="/cart" component={Cart} />
            </>
          ) : (
            <Route exact path="/home" component={Login} />
          )}
          {!current && isLogin ? (
            <Redirect to="/home" />
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
    isLogin: state.shop.isLogin
  };
};

export default connect(mapStateToProps)(App);
