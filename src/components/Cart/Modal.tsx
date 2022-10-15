import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";
import Backdrop from "./Backdrop";

type ModalProps = {
  onClose?: () => void;
  children?: any;
};

const Modal = ({onClose, children}: ModalProps) => {
  const portalElement = document.getElementById('overlay-root') as HTMLElement;

  return(
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </React.Fragment>
  );
};

export default React.memo(Modal);
