import React from "react";

import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        Modal is open
        <button className="close-modal-btn" onClick={closeModal}>x</button>
      </div>
    </div>
  );
};

export default Modal;
