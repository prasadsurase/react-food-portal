import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

type HeaderCartButtonProps = {
  onClick?: () => void;
  children?: any;
};

const HeaderCartButton = ({onClick}: HeaderCartButtonProps) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}><CartIcon/></span>
      <span>Your Cart</span>
      <span className={classes.badge}>(2)</span>
    </button>
  );
};

export default React.memo(HeaderCartButton);