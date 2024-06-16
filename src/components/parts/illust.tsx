import { useEffect, useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import illustlist from "../array/illustlist";
import loadingImg from "@/img/loading_papet.png";
import Loading from "../ui-elements/loading";

interface Url {
  name: string;
  img: string;
}

const IllustParts = () => {
  const imglist = illustlist();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scroll, setScroll] = useState<string>("visible");
  const [loading, setLoading] = useState(true);

  if (typeof document !== "undefined") {
    document.body.style.overflow = scroll;
  }

  const openModal = (index: number) => {
    setSelectedImage(imglist[index].illust);
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
  const download = async () => {
    const imageUrls = illustlist();

    try {
      await Promise.all(
        imageUrls.map((image) => {
          return new Promise((resolve) => {
            const IllustBox = new window.Image();
            IllustBox.src = image.illust;
            IllustBox.onload = () => {
              resolve(null);
            };
          });
        })
      );
    } finally {
      // ロード完了後、ローディング状態を終了
      setLoading(false);
    }
  };
  useEffect(() => {
    download();
  }, []);

  if (loading) {
    return <Loading loadingImg={loadingImg} />;
  }

  return (
    <>
      {imglist.map((image, index) => (
        <>
          <div className=" -skew-x-12 overflow-hidden rounded-md border-2 border-white shadow transition-transform duration-300 hover:scale-105">
            <div className=" bg-white">
              <img
                key={index}
                src="img/ui-elements/icon_bg.png"
                alt="背景"
                className=" absolute h-full w-full opacity-50 "
              />
              <img
                key={index}
                src={image.icon}
                alt="イラスト"
                className="skew-x-12 scale-125 transform cursor-pointer object-cover "
                onClick={() => openModal(index)}
              />
            </div>
            <p className=" relative w-full   bg-indigo-950 bg-opacity-90 text-center text-xs font-bold text-purple-200 sm:text-2xl">
              {image.name}
            </p>
          </div>
        </>
      ))}

      {selectedImage && (
        <div>
          <animated.div
            style={backgroundAnimation}
            className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center"
            onClick={closeModal}
          >
            <animated.img
              src={selectedImage}
              alt="Selected Image"
              className=" absolute  aspect-square rounded-lg  object-contain sm:h-3/4"
              style={scaleAnimation}
            />
          </animated.div>
        </div>
      )}
    </>
  );
};

export default IllustParts;
