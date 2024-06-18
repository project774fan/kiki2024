import React, { useEffect, useState } from "react";
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
      <div className="absolute  h-full w-full ">
        <TriangleBG style="absolute" />

        <ModalBar title="名言集" logo={player} handoleClose={handoleClose} hidden={false} />

        <div className="absolute top-0 flex h-full w-full items-center  justify-center pt-12 md:pt-14 xl:pt-16">
          <div className="grid h-full w-full grid-cols-1 gap-4 overflow-y-auto p-3 px-2 sm:grid-cols-2 xl:px-48">
            {link.map((videoId, index) => (
              <div key={index} className=" aspect-video ">
                <iframe
                  className="h-full w-full rounded-lg"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded YouTube"
                />
              </div>
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
