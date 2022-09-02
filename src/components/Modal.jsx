import React, { useCallback, useEffect, useRef } from "react";
import * as modalStyles from "../styles/modal.module.css";

const Modal = ({ isModalOpen, hideModal, modalData }) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      hideModal();
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && isModalOpen) {
        hideModal();
        console.log("Esc pressed");
      }
    },
    [hideModal, isModalOpen],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <div className={modalStyles.background} onClick={closeModal} ref={modalRef}>
      <div className={modalStyles.modalWrapper}>
        <img className={modalStyles.modalImg} src={modalData.previewImage} alt="challenge" />
        <div className={modalStyles.modalContent}>
          <h1>{modalData.label}</h1>
          <p>{modalData.description}</p>
        </div>
        <div className={modalStyles.closeModalButton} aria-label="Close modal" onClick={() => hideModal()}>
          &#x2715;
        </div>
      </div>
    </div>
  );
};

export default Modal;
