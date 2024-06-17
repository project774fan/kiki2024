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

  //モーダルレスポンシブ
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMobile = windowWidth <= 640;
  const adjustedStyles = {
    ...customStyles,
    content: {
      ...customStyles.content,
      right: isMobile ? "5%" : "10%",
      left: isMobile ? "5%" : "10%",
      top: isMobile ? "2%" : "3%",
      bottom: isMobile ? "2%" : "3%",
    },
  };

  return (
    <Modal
      isOpen={isModalOpne}
      onRequestClose={handoleClose}
      contentLabel="モーダル"
      style={adjustedStyles}
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
