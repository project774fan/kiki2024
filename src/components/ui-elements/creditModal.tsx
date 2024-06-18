import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import customStyles from "./customStyles";
import { XMarkIcon } from "@heroicons/react/24/solid";
import EnqueteParts from "../parts/enquete";
import TriangleBG from "./triangleBG";
import ModalBar from "./modalBar";
import credit_logo from "@/img/credit_logo.png";
import cleditList from "@/components/array/creditlist";

interface ModalCheck {
  isModalOpne: any;
  closeModal: () => void;
}

const CreditModal = ({ isModalOpne, closeModal }: ModalCheck) => {
  const handoleClose = () => {
    closeModal();
  };

  const list = cleditList();

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

        <ModalBar
          title="参加者リスト"
          logo={credit_logo}
          handoleClose={handoleClose}
          hidden={false}
        />

        <div className="absolute top-0 flex h-full w-full items-center  justify-center px-2 pb-2 pt-14 sm:px-0 sm:pb-8 sm:pt-24">
          <div className=" boerder-violet-400 grid h-full  grid-cols-2 gap-3 overflow-y-auto rounded-md bg-white bg-opacity-80 p-2 shadow-lg shadow-violet-300 lg:grid-cols-3">
            {list.map((list, index) => (
              <a key={index} href={list.url} target="_blank" className=" hover:text-violet-400">
                <p className="text-start text-sm sm:text-base  sm:font-bold">{list.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreditModal;

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
