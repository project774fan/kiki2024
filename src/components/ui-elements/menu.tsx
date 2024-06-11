"use client";
import Link from "next/link";
import Image from "next/image";
import msgBtn from "../../../public/img/ui-elements/massageBtn.png";
import illustBtn from "../../../public/img/ui-elements/illustBtn.png";
import eventBtn from "../../../public/img/ui-elements/eventBtn.png";
import hokuroBtn from "../../../public/img/ui-elements/hokuroBtn.png";
import MsgModal from "./msgModal";
import React, { useState } from "react";
import EnqModal from "./enqModal";
import Banner from "./swiper";
import YouTubeModal from "./youTubeModal";

const Menu = () => {
  const linkStyle = "ml-5 mr-10 -translate-y-1/4 hover:scale-105";
  const [isMsgOpne, setIsMsgOpne] = useState(false);
  const [isEnqOpne, setIsEnqOpne] = useState(false);
  const [isYouTubeOpen, setIsYouTubeOpen] = useState(false);
  // const [click, setClick] = useState(true);

  //YouTube
  const openYT = () => {
    setIsYouTubeOpen(true);
    // setClick(false);
  };

  //メッセージ
  const openMsg = () => {
    setIsMsgOpne(true);
    // setClick(false);
  };

  //アンケート
  const openEnq = () => {
    setIsEnqOpne(true);
    // setClick(false);
  };

  //モーダル閉じる
  const closeModal = () => {
    setIsYouTubeOpen(false);
    setIsMsgOpne(false);
    setIsEnqOpne(false);
    // setClick(true);
  };

  console.log("モーダル", isMsgOpne);
  return (
    <footer className=" fixed bottom-10 left-10 right-10 ">
      <MsgModal isModalOpne={isMsgOpne} closeModal={closeModal} />
      <EnqModal isModalOpne={isEnqOpne} closeModal={closeModal} />
      <YouTubeModal isModalOpne={isYouTubeOpen} closeModal={closeModal} />

      <Banner />

      <div className=" absolute bottom-0 mx-5 flex  h-1/2  w-full  -skew-x-12 items-center overscroll-contain rounded-md bg-white bg-opacity-70 shadow-xl"></div>
      <div className="relative ml-5 flex w-3/4">
        <button onClick={openMsg} className={linkStyle}>
          <Image src={msgBtn} alt="メッセージ" />
        </button>
        <Link href="/gacha" className={linkStyle}>
          <Image src={illustBtn} alt="イラスト" />
        </Link>
        <button onClick={openEnq} className={linkStyle}>
          <Image src={eventBtn} alt="アンケート" />
        </button>
        <button onClick={openYT} className={linkStyle}>
          <Image src={eventBtn} alt="YouTube" />
        </button>
      </div>
    </footer>
  );
};
export default Menu;
