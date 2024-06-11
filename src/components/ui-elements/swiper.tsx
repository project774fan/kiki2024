import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div className=" absolute w-80 ">
      <Swiper
        className=" bottom-52 left-10 rounded-lg shadow-md "
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
            <img src="img/ui-elements/background.png" alt="1" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/gacha">
            <img src="img/ui-elements/background.png" alt="2" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/gacha">
            <img src="img/ui-elements/background.png" alt="3" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/gacha">
            <img src="img/ui-elements/background.png" alt="4" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
