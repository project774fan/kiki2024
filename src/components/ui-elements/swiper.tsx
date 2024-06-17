import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import swiperImg from "@/img/gacha/gacya_banner.png";
const Banner = () => {
  return (
    <div className="mt-auto w-3/5 sm:w-1/5">
      <Swiper
        className="left-0 rounded-lg shadow-md sm:left-10 "
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Link href="/gacha">
            <Image src={swiperImg} alt="1" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/gacha">
            <Image src={swiperImg} alt="2" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/gacha">
            <Image src={swiperImg} alt="3" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/gacha">
            <Image src={swiperImg} alt="4" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
