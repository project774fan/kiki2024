"use client";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import MsgParts from "../parts/message";
import customStyles from "./customStyles";
import ModalBar from "./modalBar";
import pape_log from "@/img/pape_logo.png";

interface ModalCheck {
  isModalOpne: any;
  closeModal: () => void;
}

const MsgModal = ({ isModalOpne, closeModal }: ModalCheck) => {
  const handoleClose = () => {
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpne}
      onRequestClose={handoleClose}
      contentLabel="モーダル"
      style={customStyles}
      closeTimeoutMS={200}
    >
      <ModalBar title="PapeTalk" logo={pape_log} handoleClose={handoleClose} hidden={true} />
      <MsgParts />
    </Modal>
  );
};

export default MsgModal;

interface Handle {
  handoleClose: () => void;
}
