import { useEffect, useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import illustlist from "../array/illustlist";
import loadingImg from "../../img/loading.png";

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
  const download = async () => {
    const imageUrls = illustlist();

    try {
      await Promise.all(
        imageUrls.map((url: Url) => {
          return new Promise((resolve) => {
            const IllustBox = new window.Image();
            IllustBox.src = url.img;
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
    return (
      <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform">
        <Image src={loadingImg} alt="" className="h-10 w-10 animate-spin object-contain" />
      </div>
    );
  }

  return (
    <>
      {imglist.map((image, index) => (
        <>
          <div className="-skew-x-12 overflow-hidden rounded-md border-2  border-white  shadow transition-transform duration-300 hover:scale-105">
            <div>
              <img
                key={index}
                src="img/ui-elements/illust_icon.png"
                alt="背景"
                className=" absolute h-full w-full opacity-50"
              />
              <img
                key={index}
                src={image.img}
                alt="メッセージ"
                className="skew-x-12 transform cursor-pointer object-cover "
                onClick={() => openModal(index)}
              />
            </div>
            <p className=" relative w-full skew-x-12 scale-105 bg-gray-500 text-center text-2xl  font-bold text-purple-400">
              {image.name}
            </p>
          </div>
        </>
      ))}

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
              className=" absolute bg-white object-contain px-4 sm:h-3/4"
              style={scaleAnimation}
            />
          </animated.div>
        </div>
      )}
    </>
  );
};

export default IllustParts;
