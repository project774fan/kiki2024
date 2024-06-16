import React from "react";
import Image, { StaticImageData } from "next/image";

interface LoadingProps {
  loadingImg: StaticImageData;
}

const Loading = ({ loadingImg }: LoadingProps) => {
  return (
    <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform">
      <Image
        src={loadingImg}
        alt="ローディング"
        className="h-20 w-20 animate-spin object-contain"
      />
    </div>
  );
};

export default Loading;
