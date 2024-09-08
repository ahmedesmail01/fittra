import React from "react";
import linkedin from "../../public/assets/linkedIn.png";
import youtube from "../../public/assets/youtube.png";
import x from "../../public/assets/x.png";
import facebook from "../../public/assets/facebook.png";
import Image from "next/image";
import copy from "../../public/assets/copyright.png";

const Footer = () => {
  return (
    <div className="w-full  px-[32px] py-[32px] md:py-[40px] bg-gradient-to-br from-[#231a04] to-[#070501]">
      <div className="flex  justify-between md:justify-center items-center content-center sm:gap-x-[88px] gap-x-[88px] gap-y-4 flex-wrap px-4 py-0  text-white font-[pnu-bold]">
        <a
          href="#"
          className="flex flex-row-reverse items-center justify-between md:justify-center  gap-3"
        >
          <Image src={facebook} alt="facebook" />
          <p>Facebook</p>
        </a>

        <a
          href="#"
          className="flex flex-row-reverse items-center justify-center gap-3"
        >
          <Image src={x} alt="twitter" />
          <p>X</p>
        </a>
        <a
          href="#"
          className="flex flex-row-reverse items-center  justify-center gap-3"
        >
          <Image src={youtube} alt="youtube" />
          <p>Youtube</p>
        </a>
        <a
          href="#"
          className="flex  flex-row-reverse items-center justify-center gap-3"
        >
          <Image src={linkedin} alt="instagram" />
          <p>LinkedIn</p>
        </a>
      </div>
      <div className="grid content-center items-center pt-[64px]">
        <div className="text-center">
          <p className="flex justify-center items-center gap-2 text-[#CABDD8] font-[pnu-regular] text-sm font-medium leading-[25px] tracking-[-0.14px] opacity-70">
            2024 All Rights Reserved - Mange The Now
            <Image
              src={copy}
              width={18}
              alt="copy"
              className="filter invert contrast-0 brightness-200" // Makes the image white
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

/* 
      <div className="flex border border-white gap-y-4 md:w-full items-center justify-center md:space-x-[88px] flex-wrap align-self-stretch  text-white font-[pnu-bold]">

*/
