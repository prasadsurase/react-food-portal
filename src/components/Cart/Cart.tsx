import React from "react";
import classes from './Cart.module.css';
import Modal from "./Modal";

type CartProps = {
  children?: any;
};

const Cart = ({}: CartProps) => {
  const cartItems = <ul className={classes['cart-items']}>{[
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    }
  ].map(item => <li>{item.name}</li>)}</ul>;
  return(
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$32.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default React.memo(Cart);