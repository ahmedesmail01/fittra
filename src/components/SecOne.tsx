import Image from "next/image";
import player from "../../public/assets/Play.png";

const SecOne = () => {
  return (
    <div className="flex py-10 px-[16px] text-center items-center flex-col h-auto bg-black">
      <h2 className="text-white  font-[pnu-regular]  font-[700] text-[32px] md:text-[40px]">
        عيش فطرتك ومارسها في حياتك العلمية
      </h2>
      <p className=" text-custom_green font-[pnu-regular]  font-[700] text-[32px] md:text-[40px]">
        والعملية والاجتماعية
      </p>
      <div
        id="video player"
        className="flex  my-[48px] items-center justify-center max-w-full w-[368px] h-[261px] min-w-[310px] md:w-[888px]  md:h-[533px] bg-white rounded-3xl  shadow-[0px_0px_164.2px_30px_rgba(254,189,33,0.43)] border-[2px] md:border-[5px] border-solid border-[rgba(23,153,99,0.77)]
 "
      >
        <Image src={player} alt="player" className="w-[63px] md:w-[72px]" />
      </div>
      <p
        dir="rtl"
        className="text-white  font-[pnu-medium] w-[386px] max-w-full sm:w-[722px] min-w-[310px]  font-[500] text-[20px] sm:text-[24px]"
      >
        برنامج <span className="text-custom_green">Living Fittra</span> يقدم لك
        فرصة التوازن النفسي و الروحي
        <br className="hidden sm:block" /> والعيش بحياة متكلملة تنسجم مع فطرتك
        الطبيعية
      </p>
    </div>
  );
};

export default SecOne;
