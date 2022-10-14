import React from "react";
import classes from './Modal.module.css';

type BackdropProps = {
  children?: any;
};

const Backdrop = (props: BackdropProps) => {
  return(
    <div className={classes.backdrop}>
      
    </div>
  );
};

export default React.memo(Backdrop);