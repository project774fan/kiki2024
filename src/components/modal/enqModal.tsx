import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import customStyles from "../ui-elements/customStyles";
import EnqueteParts from "../parts/enquete";
import TriangleBG from "../ui-elements/triangleBG";
import enquete_log from "@/img/modalBar/enquete_logo.webp";
import ModalBar from "../ui-elements/modalBar";

interface ModalCheck {
  isModalOpne: any;
  closeModal: () => void;
}

const EnqModal = ({ isModalOpne, closeModal }: ModalCheck) => {
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
      <TriangleBG style="absolute" />
      <ModalBar title="アンケート" logo={enquete_log} handoleClose={handoleClose} hidden={false} />
      <div className=" absolute top-0 flex  h-full w-full pt-10 md:pt-14 xl:pt-16">
        <div className=" w-full overflow-y-auto ">
          <EnqueteParts />
        </div>
      </div>
    </Modal>
  );
};

export default EnqModal;
