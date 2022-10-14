import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";
import Backdrop from "./Backdrop";

type ModalProps = {
  children?: any;
};

const Modal = ({children}: ModalProps) => {
  const portalElement = document.getElementById('overlay-root') as HTMLElement;

  return(
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </React.Fragment>
  );
};

export default React.memo(Modal);
