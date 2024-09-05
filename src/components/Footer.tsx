import React from "react";
import insta from "../../public/assets/insta.png";
import youtube from "../../public/assets/youtube.png";
import x from "../../public/assets/x.png";
import facebook from "../../public/assets/facebook.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full py-10 px-[32px] bg-[#0d0a01]">
      <div className="flex items-center justify-center gap-[88px] flex-wrap align-self-stretch  text-white font-[pnu-bold]">
        <div className="flex flex-row-reverse items-center justify-center gap-3">
          <Image src={facebook} alt="insta" />
          <p>Facebook</p>
        </div>{" "}
        <div className="flex flex-row-reverse items-center justify-center gap-3">
          <Image src={youtube} alt="insta" />
          <p>Youtube</p>
        </div>
        <div className="flex flex-row-reverse items-center justify-center gap-3">
          <Image src={x} alt="insta" />
          <p>X</p>
        </div>
        <div className="flex flex-row-reverse items-center justify-center gap-3">
          <Image src={insta} alt="insta" />
          <p>Instagram</p>
        </div>
      </div>
      <div className="pt-[64px]">
        <p className="text-[#CABDD8] text-center font-[pnu-regular] text-sm font-medium leading-[25px] tracking-[-0.14px] opacity-70 ">
          © 2024 All Rights Reserved - Mange The Now
        </p>
      </div>
    </div>
  );
};

export default Footer;
