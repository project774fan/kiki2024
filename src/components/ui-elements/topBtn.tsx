import Link from "next/link";
import Image from "next/image";
import puppet from "@/img/puppet.png";
import React from "react";

const TopBtn = () => {
  return (
    <div className=" fixed bottom-6 right-10 z-10 transition-transform duration-200 hover:scale-105">
      <Link href={"/top"} className="">
        <p className="  absolute flex h-full w-full items-center justify-center font-bold text-white hover:text-yellow-100">
          戻る
        </p>
        <Image src={puppet} alt="top" className=" h-20 w-20 " />
      </Link>
    </div>
  );
};

export default TopBtn;
