import React from "react";
import Input from "../../UI/Input";
import classes from './MealItemForm.module.css';

type MealItemFormProps = {
  children?: any;
};

const MealItemForm = (props: MealItemFormProps) => {
  return(
    <form className={classes.form}>
      <Input label="Amount" input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        default: '1'
      }} />
      <button>Add</button>
    </form>
  );
};

export default React.memo(MealItemForm);