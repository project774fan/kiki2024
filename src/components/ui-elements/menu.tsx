"use client";
import Link from "next/link";
import Image from "next/image";
import MsgModal from "../modal/msgModal";
import React, { useState } from "react";
import EnqModal from "../modal/enqModal";
import Banner from "./swiper";
import YouTubeModal from "../modal/youTubeModal";
import messageBtn from "@/img/menu/メッセージ.webp";
import illustBtn from "@/img/menu/イラスト.webp";
import enqueteBtn from "@/img/menu/アンケート.webp";
import youtubeBtn from "@/img/menu/名言集.webp";
import creditBtn from "@/img/menu/参加者.webp";
import CreditModal from "../modal/creditModal";

const Menu = () => {
  const linkStyle =
    "xl:ml-5 xl:mr-16 ml-auto mr-auto hover:scale-105 transition-transform duration-300 drop-shadow-lg w-full md:mb-2";
  const [isMsgOpne, setIsMsgOpne] = useState(false);
  const [isEnqOpne, setIsEnqOpne] = useState(false);
  const [isYouTubeOpen, setIsYouTubeOpen] = useState(false);
  const [isCreditOpen, setIsCreditOpen] = useState(false);
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

  //参加者
  const openCrecit = () => {
    setIsCreditOpen(true);
    // setClick(false);
  };

  //モーダル閉じる
  const closeModal = () => {
    setIsYouTubeOpen(false);
    setIsMsgOpne(false);
    setIsEnqOpne(false);
    setIsCreditOpen(false);
    // setClick(true);
  };

  return (
    <footer className="absolute bottom-4 left-1/2 w-11/12 -translate-x-1/2 transform sm:bottom-10 ">
      <MsgModal isModalOpne={isMsgOpne} closeModal={closeModal} />
      <EnqModal isModalOpne={isEnqOpne} closeModal={closeModal} />
      <YouTubeModal isModalOpne={isYouTubeOpen} closeModal={closeModal} />
      <CreditModal isModalOpne={isCreditOpen} closeModal={closeModal} />

      <div className="flex  sm:block">
        <Banner />
        <div className="absolute bottom-0 mx-5 hidden h-1/4 w-full -skew-x-12 items-center rounded-md bg-purple-100 bg-opacity-70 shadow-xl sm:block"></div>
        <div className="relative ml-auto h-auto w-1/3 justify-center sm:ml-0 sm:flex sm:h-1/3 sm:w-4/5">
          <Link href="/gacha" className={linkStyle}>
            <Image src={illustBtn} alt="イラスト" />
          </Link>
          <button onClick={openMsg} className={linkStyle}>
            <Image src={messageBtn} alt="メッセージ" />
          </button>
          <button onClick={openEnq} className={linkStyle}>
            <Image src={enqueteBtn} alt="アンケート" />
          </button>
          <button onClick={openYT} className={linkStyle}>
            <Image src={youtubeBtn} alt="YouTube" />
          </button>
          <button onClick={openCrecit} className={linkStyle}>
            <Image src={creditBtn} alt="credit" className="rounded-2xl " />
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Menu;
