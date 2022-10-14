import React from "react";
import classes from './Card.module.css';

type CardProps = {
  children?: any;
};

const Card = (props: CardProps) => {
  return(
    <div className={classes.card}>
      {props.children}
    </div>
  );
};

export default React.memo(Card);