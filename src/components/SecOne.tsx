import Image from "next/image";
import player from "../../public/assets/Play.png";

const SecOne = () => {
  return (
    <div className="flex py-10 px-10 text-center items-center flex-col h-auto bg-black">
      <h2 className="text-white  font-[pnu-regular]  font-[700] text-[32px] sm:text-[40px]">
        عيش فطرتك ومارسها في حياتك العلمية
      </h2>
      <p className="mb-10 text-custom_green font-[pnu-regular]  font-[700] text-[32px] sm:text-[40px]">
        والعملية والاجتماعية
      </p>
      <div
        id="video player"
        className="flex  mb-10 items-center justify-center max-w-full w-[368px] h-[261px] min-w-[310px] sm:w-[888px]  sm:h-[533px] bg-white rounded-3xl "
      >
        <Image src={player} alt="player" className="w-[20px] sm:w-[50px]" />
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
