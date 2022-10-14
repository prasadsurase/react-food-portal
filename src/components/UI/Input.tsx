import React from "react";
import classes from './Input.module.css';

type InputProps = {
  id?: string;
  label?: string;
  input?: any;
  children?: any;
};

const Input = ({input, label}: InputProps) => {
  return(
    <div className={classes.input}>
      <label htmlFor={input.id}>
        {label}
      </label>
      <input id={input.id} {...input} />
    </div>
  );
};

export default React.memo(Input);