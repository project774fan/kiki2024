import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import msglist from "../array/msglist";
import Loading from "../ui-elements/loading";
import loadingImg from "@/img/loading_papet.png";

const MsgParts = () => {
  const imglist = msglist();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scroll, setScroll] = useState<string>("visible");
  const [loading, setLoading] = useState(true);
  const [trigger, setTrigger] = useState(0); // 変更: トリガー用のカウンター状態

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = scroll;
    }
  }, [scroll]);

  const openModal = (index: number) => {
    setSelectedImage(imglist[index].img);
    setScroll("hidden");
    setTrigger((prev) => prev + 1); // 変更: トリガー用カウンターをインクリメント
  };

  const closeModal = () => {
    setSelectedImage(null);
    setScroll("visible");
  };

  const scaleAnimation = useSpring({
    transform: selectedImage ? "translateY(0%) " : "translateY(-100%) ",
    from: { transform: "translateY(-100%) " },
    config: { tension: 200, friction: 30 },
    reset: true,
  });

  const opacityAnimation = useSpring({
    opacity: selectedImage ? 1 : 0.5,
    from: { opacity: 0 },

    reset: true,
  });

  const download = async () => {
    try {
      await Promise.all(
        imglist.map((image) => {
          return Promise.all([
            new Promise((resolve) => {
              const IllustBoxImg = new window.Image();
              IllustBoxImg.src = image.img;
              IllustBoxImg.onload = () => {
                resolve(null);
              };
            }),
            new Promise((resolve) => {
              const IllustBoxIcon = new window.Image();
              IllustBoxIcon.src = image.icon;
              IllustBoxIcon.onload = () => {
                resolve(null);
              };
            }),
          ]);
        })
      );
    } finally {
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
    <div className="flex h-full w-full pt-12 sm:pt-16">
      <div className="hidden h-full w-24  bg-slate-600 sm:block" />
      <div className="flex h-full  w-full flex-col-reverse sm:flex-row  ">
        <div className=" h-[70%] w-full overflow-y-auto bg-indigo-50 shadow-inner sm:h-full sm:w-1/2">
          <div className="h-full w-full border">
            {imglist.map((list, index) => (
              <>
                <button
                  onClick={() => openModal(index)}
                  className="flex w-full border p-2  pl-3 hover:bg-violet-100 sm:p-4 "
                >
                  <img src={list.icon} alt="アイコン" className=" h-10 w-10 sm:h-12 sm:w-12 " />
                  <p
                    key={index}
                    className=" my-auto flex h-full items-center justify-center pl-2 text-lg sm:text-2xl"
                  >
                    {list.name}
                  </p>
                </button>
              </>
            ))}
          </div>
        </div>

        <div className=" h-[30%]  w-full  sm:relative  sm:h-full sm:w-1/2">
          <div className="h-full">
            <div className="h-full w-full">
              {selectedImage && (
                <animated.div
                  key={trigger}
                  className="flex h-full w-full items-center justify-center"
                  onClick={closeModal}
                >
                  <animated.img
                    src={selectedImage}
                    alt="Selected Image"
                    className=" w-4/5 object-contain"
                    style={{ ...scaleAnimation, ...opacityAnimation }}
                  />
                </animated.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MsgParts;
