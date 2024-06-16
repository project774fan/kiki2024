import React from "react";
import Image from "next/image";
import triangleImg from "@/img/triangle_bg.png";

interface TriangleBG_Props {
  style: string;
}
const TriangleBG = ({ style }: TriangleBG_Props) => {
  return (
    <Image
      src={triangleImg}
      alt="イラスト背景"
      className={` h-full w-full object-cover ${style}`}
    />
  );
};

export default TriangleBG;
