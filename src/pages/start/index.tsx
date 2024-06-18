"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import startImg from "@/img/start/start.png";

export default function Home() {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      router.push("/top");
    }, 800);
  };

  if (!isMounted) return null;
  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('img/ui-elements/background.png')" }}
          initial={{ opacity: 0 }}
          animate={isClicked ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
        {/* <Top /> */}
        <motion.div
          className=" absolute z-50 flex h-full w-full cursor-pointer items-center justify-center"
          initial={{ scale: 1 }}
          animate={isClicked ? { scale: 2, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          onClick={handleClick}
        >
          <Image src={startImg} alt="start" className=" h-full w-full object-cover object-bottom" />
        </motion.div>
      </div>
    </>
  );
}
