import React from "react";
import Modal from "react-modal";
import customStyles from "./customStyles";
import { XMarkIcon } from "@heroicons/react/24/solid";
import EnqueteParts from "../parts/enquete";

interface ModalCheck {
  isModalOpne: any;
  closeModal: () => void;
}

const YouTubeModal = ({ isModalOpne, closeModal }: ModalCheck) => {
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
      <div className=" h-full w-full">
        <XMark handoleClose={handoleClose} />
      </div>
    </Modal>
  );
};

export default YouTubeModal;

interface Handle {
  handoleClose: () => void;
}

export const XMark = ({ handoleClose }: Handle) => {
  return (
    <div className="flex w-full">
      <button
        onClick={handoleClose}
        className=" ml-auto mr-6 mt-2 transition-transform duration-300 hover:scale-105"
      >
        <XMarkIcon className=" size-12 " />
      </button>
    </div>
  );
};
