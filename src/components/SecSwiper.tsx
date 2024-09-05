"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import swImgOne from "../../public/assets/Frame c 1.svg";
import swImgTwo from "../../public/assets/Frame c 2.svg";
import swImgThree from "../../public/assets/Frame c 3.svg";

const SecSwiper = () => {
  return (
    <div className="bg-black  pb-10">
      <h2 className="flex flex-col mb-[48px] justify-center flex-[1_0_0] self-stretch text-white text-center font-[pnu-regular] text-[32px] md:text-[40px] font-bold leading-[160%]">
        في برنامج حياة الفطرة
      </h2>
      <Swiper
        spaceBetween={0}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <Image src={item.image} alt="swiper image" />
              <p className="self-stretch text-white text-center font-[pnu-regular] text-[16px] md:text-[24px] font-bold leading-[160%]">
                {item.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SecSwiper;

const data = [
  {
    id: 1,
    title: "ستتعلم كيف تتخلص من الضغوط والتحورات التي تعيق حياتك",
    image: swImgOne,
  },
  {
    id: 2,
    title: "تعيد اكتشاف ذاتك بشكل متوازن ومدروس",
    image: swImgTwo,
  },
  {
    id: 3,
    title: "ستتعلم كيف تتخلص من الضغوط والتحورات التي تعيق حياتك",
    image: swImgThree,
  },
];
