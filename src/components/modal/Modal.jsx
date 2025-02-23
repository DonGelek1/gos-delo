import React from "react";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, children }) => {
   if (!isOpen) return null;

   return (
      <div className="modal" onClick={onClose}>
         <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            {children}
            <button className="modal__button modal__button--close" onClick={onClose}>
               ✕
            </button>
         </div>
      </div>
   );
};

export default Modal;
