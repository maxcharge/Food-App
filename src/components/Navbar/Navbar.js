import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";

const Navbar = ({ cart,isLogin }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Menu</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          {isLogin ? (<><h3 className={styles.cart__title}>Cart</h3>
          <div className={styles.cart__counter}>{cartCount}</div></>):<button className={styles.login__btn}>Login</button>}
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    isLogin: state.shop.isLogin
  };
};

export default connect(mapStateToProps)(Navbar);
