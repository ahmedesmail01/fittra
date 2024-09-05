import Image from "next/image";
import React from "react";
import VideosSlider from "./SuccessVideos";
// import { useTranslation } from "react-i18next";
// import MySwiper from "./MySwiper";

const SuccessClients = () => {
  // const { t } = useTranslation();
  return (
    <div className="relative px-4 pt-10 pb-28  min-h-[400px] flex flex-col justify-start items-center bg-[#231905] w-full">
      {" "}
      <h2 className="text-white text-center font-[pnu-bold] text-[32px] md:text-[40px]">
        أراء العملاء
      </h2>
      <div className="gap-[79px] w-fit max-w-full h-[400px] flex flex-col lg:flex-row">
        <div className=" lg:min-h-[315px] h-full max-w-full">
          <VideosSlider />
        </div>{" "}
      </div>
    </div>
  );
};

export default SuccessClients;
