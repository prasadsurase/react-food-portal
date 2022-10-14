import React from "react";
import MealItemForm from "./MealItemForm";
import classes from './MealItem.module.css';

type MealItemProps = {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  children?: any;
};

const MealItem = ({name, description, price}: MealItemProps) => {
  return(
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${price}</div>
      </div>
      <div><MealItemForm /></div>
    </li>
  );
};

export default React.memo(MealItem);