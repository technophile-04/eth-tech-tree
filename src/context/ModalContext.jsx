import React, { useState } from "react";
import Modal from "../components/Modal";

const ModalContext = React.createContext();

const ModalProvider = props => {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  function showModal(data) {
    console.log(`called with data`, data);
    if (data) {
      setModal(true);
      setModalData(data);
    } else {
      setModal(false);
      setModalData(null);
      throw new Error("No data passed");
    }
  }

  function hideModal() {
    setModal(false);
    setModalData(null);
  }

  return (
    <ModalContext.Provider value={{ showModal }} {...props}>
      {props.children}
      {modal && modalData && <Modal hideModal={hideModal} modalData={modalData} isModalOpen={modal} />}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};

export { ModalProvider, useModal };
