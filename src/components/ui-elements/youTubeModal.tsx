import React from "react";
import Modal from "react-modal";
import customStyles from "./customStyles";
import { XMarkIcon } from "@heroicons/react/24/solid";
import EnqueteParts from "../parts/enquete";
import TriangleBG from "./triangleBG";
import ModalBar from "./modalBar";
import player from "@/img/player.png";

interface ModalCheck {
  isModalOpne: any;
  closeModal: () => void;
}

const YouTubeModal = ({ isModalOpne, closeModal }: ModalCheck) => {
  const handoleClose = () => {
    closeModal();
  };

  const link = [
    "B_oZSfF6aOI",
    "B_oZSfF6aOI",
    "B_oZSfF6aOI",
    "B_oZSfF6aOI",
    "B_oZSfF6aOI",
    "B_oZSfF6aOI",
    "B_oZSfF6aOI",
    "B_oZSfF6aOI",
    "B_oZSfF6aOI",
    "B_oZSfF6aOI",
    "B_oZSfF6aOI",
    "B_oZSfF6aOI",
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
        <TriangleBG style="absolute" />

        <ModalBar title="名言集" logo={player} handoleClose={handoleClose} hidden={false} />

        <div className="absolute top-0 flex h-full w-full items-center  justify-center pt-16">
          <div className="grid h-full w-full grid-cols-2 gap-4 overflow-y-auto p-3 px-48">
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
