import React from "react";
import classes from './Cart.module.css';
import Modal from "./Modal";

type CartProps = {
  onClose?: () => void;
  children?: any;
};

const Cart = ({onClose}: CartProps) => {
  const cartItems = <ul className={classes['cart-items']}>{[
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    }
  ].map(item => <li>{item.name}</li>)}</ul>;
  return(
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$32.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default React.memo(Cart);