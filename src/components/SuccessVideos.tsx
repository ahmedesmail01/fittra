"use client";
import { Stream } from "@cloudflare/stream-react";

// import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import {
  Autoplay,
  EffectCoverflow,
  FreeMode,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Slider.css";
import React, { useRef } from "react";
import { Button } from "@nextui-org/react";
import { title } from "process";
// import { useTranslation } from "react-i18next";

type Props = any;
const VideosSlider = (props: Props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [playerRef, setPlayerRef] = React.useState<any>(null);
  // const { t, i18n } = useTranslation();
  // console.log(activeIndex);
  return (
    <>
      <Swiper
        dir="ltr"
        modules={[Navigation, Pagination, EffectCoverflow, FreeMode, Autoplay]}
        breakpoints={{
          350: {
            slidesPerView: "auto",
          },

          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1800: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        loop={true}
        effect="coverflow"
        grabCursor
        centeredSlides={true}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: true,
        //   pauseOnMouseEnter: true,
        // }}
        slideToClickedSlide={true}
        // allowTouchMove={true}
        allowSlideNext={true}
        allowSlidePrev={true}
        allowTouchMove={true}
        draggable={true}
        spaceBetween={0}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
          scale: 1,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          enabled: true,
          disabledClass: "swiper-button-disabled",
          navigationDisabledClass: "swiper-button-disabled",
        }}
        className="Testimonials__slider"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {TestimonialsSlides.map((el: any, index: any) => {
          return (
            <SwiperSlide key={index} className={`slide_${index + 1}`}>
              <div className="w-full flex  h-full flex-col items- relative justify-center">
                {/* <h2 className="mb-8 font-[pnu-regular] text-white text-lg lg:text-2xl ">
                  {el.title}
                </h2> */}
                {/* <Stream
                  src={el.link}
                  // key={el.link}
                  controls={true}
                  muted={activeIndex != index}
                  loop={false}
                  preload={false}
                  // className="disabled"
                  width="100%"
                  height="100%"
                /> */}
                <div className="w-full h-[90%] bg-white"></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex w-full relative mb-2 mt-4 h-8 justify-center gap-4 items-center">
        <div className="swiper-button-next !w-14 !static">
          <Image
            src={`${"/living-fittra/assets/arrow-right.svg"}`}
            width={40}
            height={40}
            alt=""
          />
        </div>
        <div className="swiper-button-prev !w-14 !static">
          <Image
            src={`${"/living-fittra/assets/arrow-left.svg"}`}
            width={40}
            height={40}
            alt=""
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default VideosSlider;

const TestimonialsSlides: any = [
  {
    id: 1,
    title: "ما هو اضطراب السكري النوع الاول",
    link: "734bb48dcbe3e1277fb8337950b93bff",
  },
  {
    id: 2,
    title: "لماذا نصاب بالسكرى من النوع الاول ",
    link: "d6184a01b1c7938e575200e93d1246c9",
  },
  {
    id: 3,
    title: "كيفيه التعافى من مرض السكر",
    link: "616feac5e46b1f94a400fb22f42d5367",
  },
  {
    id: 4,
    title: "علاقة فقدان الأمل بمرض السكر",
    link: "dc70c1659945eae2963fe441cc620dab",
  },
  {
    id: 5,
    title: "شعور النقد و ارتفاع السكر",
    link: "9765368091ed9716e8c54ffb3b16d19f",
  },
  {
    id: 6,
    title: "السكرى و االنتباه المضر",
    link: "2d73231589072964b6f81511d8b51820",
  },
  {
    id: 7,
    title: "السكري عند الذكر و الانثى",
    link: "75395e617e787b2c8b22daca66525ccc",
  },
  {
    id: 8,
    title: "السبب الحقيقي وراء ارتفاع السكر",
    link: "845c7f49648fb0d28e19a13e53a5b5f5",
  },
  {
    id: 9,
    title: "اضطرابات الاكل وعلاقتها بالسكر",
    link: "83fcd5b82dd167c822bc7a32bc907d51",
  },
];
