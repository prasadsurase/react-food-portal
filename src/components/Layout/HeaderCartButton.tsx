import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

type HeaderCartButtonProps = {
  // /** CSS class(es) to apply to the badge container element */
  // className?: string | Array<string>;
  // /** Color to apply to the badge element */
  // color?: "gray" | "blue" | "green" | "yellow" | "pink" | "purple";
  // /** Size of badge component to use */
  // size?: "small" | "medium";
  // /** Content that should be displayed inside the Badge component */
  // value?: any;
  // /** Content of the badge component */
  // children?: any;
};

const HeaderCartButton = (props: HeaderCartButtonProps) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}><CartIcon/></span>
      <span>Your Cart</span>
      <span className={classes.badge}>(2)</span>
    </button>
  );
};

export default React.memo(HeaderCartButton);