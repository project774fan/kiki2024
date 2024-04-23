import { useEffect, useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import msglist from "../array/msglist";
import hokuro from "../../img/parts/ほくろ3.png";

const MsgParts = () => {
  const imglist = msglist();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scroll, setScroll] = useState<string>("visible");
  const [loading, setLoading] = useState(true);

  if (typeof document !== "undefined") {
    document.body.style.overflow = scroll;
  }

  const openModal = (index: number) => {
    setSelectedImage(imglist[index].img);
    setScroll("hidden");
  };

  const closeModal = () => {
    setSelectedImage(null);
    setScroll("visible");
  };

  const scaleAnimation = useSpring({
    transform: `scale(${selectedImage ? 1 : 0.5})`,
  });

  const backgroundAnimation = useSpring({
    opacity: selectedImage ? 1 : 0,
    backgroundColor: selectedImage ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0)",
  });

  //ページを開いたらダウンロード
  // const download = async () => {
  //   const imageUrls = msglist();

  //   try {
  //     await Promise.all(
  //       imageUrls.map((url) => {
  //         return new Promise((resolve) => {
  //           const IllustBox = new Image();
  //           IllustBox.src = url;
  //           IllustBox.onload = () => {
  //             resolve(null);
  //           };
  //         });
  //       }),
  //     );
  //   } finally {
  //     // ロード完了後、ローディング状態を終了
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   download();
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform">
  //       <div className="h-10 w-10 animate-spin rounded-full border-4 border-nemoBlue border-t-transparent"></div>
  //       {/* <img
  //         src={loadingImg}
  //         alt=""
  //         className="h-10 w-10 animate-spin object-contain"
  //       /> */}
  //     </div>
  //   );
  // }

  return (
    <div className="flex h-full items-start justify-center ">
      <div className="p-1 sm:p-2 lg:p-4 2xl:p-6">
        <>
          {imglist.map((list, index) => (
            // <img
            //   key={index}
            //   src={image.img}
            //   alt="メッセージ"
            //   className="transform cursor-pointer object-contain shadow transition-transform duration-300 hover:scale-105"
            //   onClick={() => openModal(index)}
            // />
            <p key={index} onClick={() => openModal(index)}>
              {list.name}
            </p>
          ))}
        </>
      </div>
      {selectedImage && (
        <div>
          <animated.div
            style={backgroundAnimation}
            className="fixed left-0 top-0 flex h-full w-full items-center justify-center "
            onClick={closeModal}
          >
            <animated.img
              src={selectedImage}
              alt="Selected Image"
              className=" absolute object-contain px-4 sm:h-3/4 "
              style={scaleAnimation}
            />
          </animated.div>
        </div>
      )}
    </div>
  );
};

export default MsgParts;
