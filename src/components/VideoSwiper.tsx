"use client";
import player from "../../public/assets/Play02.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const VideoSwiper = () => {
  return (
    <div className="bg-[#1e1e1e] pb-10">
      <h2 className="text-white font-[pnu-bold] mb-10 text-center text-[32px] lg:text-[40px]">
        أراء العملاء
      </h2>
      <Swiper
        spaceBetween={0}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div
            id="video player"
            className="flex  mb-10 items-center justify-center max-w-full w-[368px] h-[261px] min-w-[310px] sm:w-[888px]  sm:h-[533px] bg-[#988e84] rounded-sm "
          >
            <Image src={player} alt="player" className="w-[20px] sm:w-[50px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="video player"
            className="flex  mb-10 items-center justify-center max-w-full w-[368px] h-[261px] min-w-[310px] sm:w-[888px]  sm:h-[533px] bg-[#988e84] rounded-sm "
          >
            <Image src={player} alt="player" className="w-[20px] sm:w-[50px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="video player"
            className="flex  mb-10 items-center justify-center max-w-full w-[368px] h-[261px] min-w-[310px] sm:w-[888px]  sm:h-[533px] bg-[#988e84] rounded-sm "
          >
            <Image src={player} alt="player" className="w-[20px] sm:w-[50px]" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default VideoSwiper;
