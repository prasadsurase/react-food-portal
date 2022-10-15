import React from "react";
import classes from './Modal.module.css';

type BackdropProps = {
  onClose?: () => void;
  children?: any;
};

const Backdrop = ({onClose}: BackdropProps) => {
  return(
    <div className={classes.backdrop} onClick={onClose}>
      
    </div>
  );
};

export default React.memo(Backdrop);