import Image from "next/image";
import heroImage from "../../public/assets/hero-image-web.svg";
import logoWeb from "../../public/assets/Logo web.png";
import logoMob from "../../public/assets/Logo mob.png";

import heroImageMob from "../../public/assets/hero-image-mob.svg";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image
        src={heroImage}
        id="web"
        layout="fill"
        objectFit="cover"
        alt="hero image"
        className="hidden sm:block"
      />

      <Image
        src={heroImageMob}
        id="mob"
        layout="fill"
        objectFit="cover"
        alt="hero image mobile"
        className="sm:hidden"
      />

      <div className="absolute w-full h-screen bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-custom_black opacity-50 z-10" />
      <div className="absolute px-[35px] w-full flex flex-col items-center top-[70%] sm:top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 ">
        <h1 className=" font-[pnu-medium] text-center text-custom_yellow font-[700] text-[24px] md:text-[32px] lg:text-[32px] ">
          Fittra Leadership Institute
        </h1>
        <p className=" font-[pnu-light] text-custom_green font-[700] text-[24px] md:text-[32px] lg:text-[32px] ">
          يقدم لكم برنامج
        </p>
        <Image src={logoWeb} alt="logo web" className="hidden md:block" />
        <Image src={logoMob} alt="logo mob" className="md:hidden" />
        <Link href={"#subscribe"}>
          <button className="w-[162px] md:w-[195px] h-[50px] md:h-[60px] px-[18px] py-[10px] rounded-2xl text-[15px] md:text-[18px] text-white font-[pnu-medium] bg-gradient-to-r from-custom_green to-custom_yellow">
            اشترك الآن
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
