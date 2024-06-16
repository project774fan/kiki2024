"use client";
import Link from "next/link";
import Image from "next/image";
import msgBtn from "../../../public/img/ui-elements/massageBtn.png";

import eventBtn from "../../../public/img/ui-elements/eventBtn.png";
import hokuroBtn from "../../../public/img/ui-elements/hokuroBtn.png";
import MsgModal from "./msgModal";
import React, { useState } from "react";
import EnqModal from "./enqModal";
import Banner from "./swiper";
import YouTubeModal from "./youTubeModal";
import messageBtn from "@/img/menu/メッセージ.webp";
import illustBtn from "@/img/menu/イラスト.webp";
import enqueteBtn from "@/img/menu/アンケート.webp";
import youtubeBtn from "@/img/menu/名言集.webp";
import creditBtn from "@/img/menu/参加者.webp";

const Menu = () => {
  const linkStyle = "ml-5 mr-16  hover:scale-105 ";
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
    <footer className="absolute bottom-10 left-1/2 w-11/12 -translate-x-1/2 transform">
      <MsgModal isModalOpne={isMsgOpne} closeModal={closeModal} />
      <EnqModal isModalOpne={isEnqOpne} closeModal={closeModal} />
      <YouTubeModal isModalOpne={isYouTubeOpen} closeModal={closeModal} />

      <div>
        <Banner />
        <div className="absolute bottom-0 mx-5 flex h-1/4 w-full -skew-x-12 items-center rounded-md bg-purple-100 bg-opacity-70 shadow-xl"></div>
        <div className="relative mx-auto flex w-11/12 justify-center">
          <button onClick={openMsg} className={linkStyle}>
            <Image src={messageBtn} alt="メッセージ" />
          </button>
          <Link href="/gacha" className={linkStyle}>
            <Image src={illustBtn} alt="イラスト" />
          </Link>
          <button onClick={openEnq} className={linkStyle}>
            <Image src={enqueteBtn} alt="アンケート" />
          </button>
          <button onClick={openYT} className={linkStyle}>
            <Image src={youtubeBtn} alt="YouTube" />
          </button>
          <button onClick={openYT} className={linkStyle}>
            <Image src={creditBtn} alt="credit" className="rounded-2xl " />
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Menu;
