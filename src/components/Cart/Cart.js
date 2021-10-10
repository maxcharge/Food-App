import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.table__holder}>
          <table >
            <tbody>
              <tr>
                <th>Dish Item</th>
                <th>Dish Price</th>
                <th>Quantity</th>
              </tr>
              {cart.map((item)=>(
                <tr>
                  <th>{item.title}</th>
                  <th>{item.price}</th>
                  <th>{item.qty}</th>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
        <hr/>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>Rs {totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
