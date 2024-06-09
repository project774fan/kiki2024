"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Background from "@/components/ui-elements/background";
import Top from "../top";

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
    }, 500); // 0.5秒後にページ遷移
  };

  if (!isMounted) return null;

  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <Top />
        <motion.div
          className=" absolute z-50 flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-blue-500 text-white"
          initial={{ scale: 1 }}
          animate={isClicked ? { scale: 2, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={handleClick}
        >
          <h1 className="">スタート画面</h1>
        </motion.div>
      </div>
    </>
  );
}
