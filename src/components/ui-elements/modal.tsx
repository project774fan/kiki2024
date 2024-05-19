"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import illustBtn from "../../img/イラストピヨ.png";
import messageBtn from "../../img/お手紙ピヨ.png";
import photoBtn from "../../img/写真ピヨ-1.png";

interface ModalCheck {
  isModalOpne: any;
  closeModal: () => void;
}

const ModalBtn = ({ isModalOpne, closeModal }: ModalCheck) => {
  const [test, setTest] = useState<boolean>(false);
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      transition: "opacity 200ms ease-in-out",
      zIndex: "40",
    },
    content: {
      //   width: "auto",
      //   height: "auto",
      //   maxWidth: "90%", // 画面幅の90%に制限 (必要に応じて調整)
      //   maxHeight: "90%", // 画面高さの90%に制限 (必要に応じて調整)
      margin: "auto",
      backgroundColor: "#fef9c3",
      borderRadius: "20px",
      //   top: "90px", // 上からの位置
      //   right: "20px", // 右からの位置
      //   left: "auto",
      //   bottom: "auto",
      //   zIndex: "40",
      // transform: 'none', // デフォルトのtransformをクリア
    },
  };

  const handoleClose = () => {
    closeModal();
  };

  console.log("ログ", test);
  return (
    <div className="z-50">
      <Modal
        isOpen={isModalOpne}
        onRequestClose={handoleClose}
        contentLabel="モーダル"
        style={customStyles}
        closeTimeoutMS={200}
      >
        <button onClick={handoleClose} className="hover:scale-105">
          閉じる
        </button>
      </Modal>
    </div>
  );
};

export default ModalBtn;
