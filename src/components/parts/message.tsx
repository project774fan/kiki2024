import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import msglist from "../array/msglist";

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
      setLoading(false);
    }
  };

  useEffect(() => {
    download();
  }, []);

  if (loading) {
    return (
      <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="border-nemoBlue h-10 w-10 animate-spin rounded-full border-4 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full pt-16">
      <div className="h-full w-24 bg-slate-600" />
      <div className="flex h-full w-full">
        <div className="h-full w-1/2 overflow-y-auto">
          <div className="h-full w-full border">
            {imglist.map((list, index) => (
              <p
                key={index}
                onClick={() => openModal(index)}
                className="border p-4 text-2xl hover:bg-neutral-100"
              >
                {list.name}
              </p>
            ))}
          </div>
        </div>
        <div className="h-full w-1/2">
          <div className="h-full">
            {selectedImage && (
              <div className="h-full w-full">
                <animated.div
                  key={trigger}
                  className="flex h-full w-full items-center justify-center"
                >
                  <animated.img
                    src={selectedImage}
                    alt="Selected Image"
                    className=" w-4/5 object-contain"
                    style={{ ...scaleAnimation, ...opacityAnimation }}
                  />
                </animated.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MsgParts;
