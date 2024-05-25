"use client";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { XMarkIcon } from "@heroicons/react/24/solid";
import illustBtn from "../../img/イラストピヨ.png";
import messageBtn from "../../img/お手紙ピヨ.png";
import photoBtn from "../../img/写真ピヨ-1.png";
import MsgParts from "../parts/message";
import customStyles from "./customStyles";

interface ModalCheck {
  isModalOpne: any;
  closeModal: () => void;
}

const MsgModal = ({ isModalOpne, closeModal }: ModalCheck) => {
  const handoleClose = () => {
    closeModal();
  };

  return (
    <>
      <Modal
        isOpen={isModalOpne}
        onRequestClose={handoleClose}
        contentLabel="モーダル"
        style={customStyles}
        closeTimeoutMS={200}
      >
        <KikiTalkBar handoleClose={handoleClose} />
        <MsgParts />
      </Modal>
    </>
  );
};

export default MsgModal;

interface Handle {
  handoleClose: () => void;
}
export const KikiTalkBar = ({ handoleClose }: Handle) => {
  return (
    <div className=" absolute  flex h-16 w-full bg-red-300">
      <div className="my-auto ml-6 text-4xl font-bold text-white">キキトーク</div>
      <button
        onClick={handoleClose}
        className="ml-auto mr-6 transition-transform duration-300 hover:scale-105"
      >
        <XMarkIcon className=" size-12 text-white" />
      </button>
    </div>
  );
};
