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

  const link = [
    "uwe7BrPM8_E",
    "iiJFxWL2-7Y",
    "P8BzkUl143s",
    "Vv7kHw1xXbM",
    "kLRn2bhf32g",
    "KzymhDkXQFI",
    "wmVOIPgd_FI",
    "EKVoUH91IoU",
    "Y0Qg_sgCoVo",
    "HhRq2DrnVb4",
    "MApSbOI09ng",
    "9RZ3M3UOUUw",
  ];

  return (
    <Modal
      isOpen={isModalOpne}
      onRequestClose={handoleClose}
      contentLabel="モーダル"
      style={customStyles}
      closeTimeoutMS={200}
    >
      <div className="absolute  h-full w-full ">
        <div className=" absolute inset-0 right-0 top-0 w-full">
          <XMark handoleClose={handoleClose} />
        </div>

        <div className="absolute top-0 flex h-full w-full items-center  justify-center overflow-y-auto">
          <div className="grid h-full w-4/5 grid-cols-2 gap-4 p-3">
            {link.map((videoId, index) => (
              <>
                <div className=" aspect-video ">
                  <iframe
                    key={index}
                    className="h-full w-full rounded-lg"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded YouTube"
                  />
                </div>
              </>
            ))}
          </div>
        </div>
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
