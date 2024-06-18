import { useEffect, useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import loadingImg from "@/img/puppet.png";
import enqlist from "../array/enqlist";
import Loading from "../ui-elements/loading";
import puppetImg from "@/img/puppet.png";

interface Url {
  name: string;
  img: string;
}

const EnqueteParts = () => {
  const enqList = enqlist();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scroll, setScroll] = useState<string>("visible");
  const [loading, setLoading] = useState(true);

  if (typeof document !== "undefined") {
    document.body.style.overflow = scroll;
  }

  const openModal = (index: number) => {
    setSelectedImage(enqList[index].img);
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
    const imageUrls = enqlist();

    try {
      await Promise.all(
        imageUrls.map((image) => {
          return new Promise((resolve) => {
            const IllustBox = new window.Image();
            IllustBox.src = image.img;
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
      {enqList.map((data, index) => (
        <>
          <div className=" mx-auto my-4 w-11/12 -skew-x-12 overflow-hidden rounded-md border-2 border-violet-200 shadow-md shadow-violet-300 transition-transform duration-300 hover:scale-105 sm:w-3/4 ">
            <button
              onClick={() => openModal(index)}
              className=" relative  flex w-full skew-x-12 scale-105 items-center bg-indigo-950 bg-opacity-80 py-3 pl-5 sm:pl-9 md:py-4 xl:py-6"
            >
              <div className="pl-0 md:pl-4 xl:pl-8">
                <div className=" relative ">
                  <p className=" absolute flex h-full w-full items-center justify-center text-center text-base font-bold text-violet-100 md:text-lg xl:text-xl">
                    {index + 1}
                  </p>
                  <Image
                    src={puppetImg}
                    alt="puppet"
                    className=" h-8 w-fit object-contain md:h-10 xl:h-12 "
                  />
                </div>
              </div>
              <p className=" pl-2 text-start text-xl leading-relaxed text-violet-100 md:text-2xl xl:text-3xl">
                {data.enquete}
              </p>
            </button>
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
              className=" absolute rounded-lg object-contain px-4 sm:h-3/4"
              style={scaleAnimation}
            />
          </animated.div>
        </div>
      )}
    </>
  );
};

export default EnqueteParts;
