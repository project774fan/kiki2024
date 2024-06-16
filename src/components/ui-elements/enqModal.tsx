import React from "react";
import Modal from "react-modal";
import customStyles from "./customStyles";
import { XMarkIcon } from "@heroicons/react/24/solid";
import EnqueteParts from "../parts/enquete";
import TriangleBG from "./triangleBG";
import enquete_log from "@/img/enquete_logo.png";
import ModalBar from "./modalBar";

interface ModalCheck {
  isModalOpne: any;
  closeModal: () => void;
}

const EnqModal = ({ isModalOpne, closeModal }: ModalCheck) => {
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
      <TriangleBG style="absolute" />
      <ModalBar title="アンケート" logo={enquete_log} handoleClose={handoleClose} hidden={false} />
      <div className=" absolute top-0 flex  h-full w-full  pt-16">
        <div className=" w-full overflow-y-auto ">
          <EnqueteParts />
        </div>
      </div>
    </Modal>
  );
};

export default EnqModal;
