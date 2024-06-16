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
          <div className="my-4 -skew-x-12 overflow-hidden rounded-md border-2 border-violet-100  shadow transition-transform duration-300 hover:scale-105">
            <button
              onClick={() => openModal(index)}
              className=" relative  flex w-full skew-x-12 scale-105 bg-indigo-950 bg-opacity-80 py-6 pl-9"
            >
              <div className="pl-8">
                <div className=" relative ">
                  <p className=" absolute flex h-full w-full items-center justify-center text-center text-xl font-bold text-violet-100">
                    {index + 1}
                  </p>
                  <Image src={puppetImg} alt="puppet" className=" h-12 w-fit object-contain " />
                </div>
              </div>

              <p className=" pl-2 text-start text-3xl  leading-relaxed text-violet-100">
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
            className="fixed left-0 top-0 flex h-full w-full items-center justify-center "
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
