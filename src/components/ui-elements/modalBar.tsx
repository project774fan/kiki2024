import React from "react";
import Image, { StaticImageData } from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";

import question from "@/img/question.png";

interface Handle {
  title: string;
  logo: StaticImageData;
  hidden: boolean;
  handoleClose: () => void;
}

export const ModalBar = ({ handoleClose, logo, title, hidden }: Handle) => {
  return (
    <div className=" absolute  z-50 flex h-12 w-full bg-violet-300 md:h-14 xl:h-16 ">
      <Image src={logo} alt="ロゴ" className="w-auto object-contain py-4 pl-4 sm:pl-6" />
      <div className="my-auto pl-2 text-2xl font-bold text-white md:text-3xl xl:text-4xl">
        {title}
      </div>

      {hidden && <Image src={question} alt="ロゴ" className=" w-auto object-contain py-4 pl-3" />}
      <button
        onClick={handoleClose}
        className="ml-auto mr-6 transition-transform duration-300 hover:scale-105"
      >
        <XMarkIcon className=" size-8 text-white md:size-10 xl:size-12" />
      </button>
    </div>
  );
};

export default ModalBar;
