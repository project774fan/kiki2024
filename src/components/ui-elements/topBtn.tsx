import Link from "next/link";
import Image from "next/image";
import puppet from "@/img/puppet.png";
import React from "react";

const TopBtn = () => {
  return (
    <div className=" fixed bottom-6 right-6 z-10 transition-transform duration-200 hover:scale-105 sm:right-10">
      <Link href={"/top"} className=" drop-shadow-lg">
        <p className="absolute flex h-full w-full items-center justify-center text-sm font-bold text-white hover:text-yellow-100 sm:text-base">
          戻る
        </p>
        <Image src={puppet} alt="top" className=" h-16 w-16 sm:h-20 sm:w-20 " />
      </Link>
    </div>
  );
};

export default TopBtn;
