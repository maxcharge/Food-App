import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";
import { logout } from "../../redux/Shopping/shopping-actions";

const Navbar = ({ cart,isLogin,logout }) => {
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
      <Link to="/products">
        <h2 className={styles.navbar__logo}>Menu</h2>
      </Link>
      {isLogin && (
        <Link to="/cart">
          <div className={styles.navbar__cart}>
            <h3 className={styles.cart__title}>Cart</h3>
            <div className={styles.cart__counter}>{cartCount}</div>
          </div>
        </Link>
      )}
      {isLogin && (
          <button onClick={logout} className={styles.login__btn}>Logout</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    isLogin: state.shop.user.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
