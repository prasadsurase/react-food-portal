import React from "react";
import classes from './Modal.module.css';

type ModalOverlayProps = {
  children?: any;
};

const ModalOverlay = ({children}: ModalOverlayProps) => {
  return(
    <div className={classes.modal}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default React.memo(ModalOverlay);