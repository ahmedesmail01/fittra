import Image from "next/image";
import leftImg from "../../public/assets/Rectangle 18122.png";
import leftImgMob from "../../public/assets/rect-img-mob.png";
import greenC from "../../public/assets/Ellipse 1909.png";

const TargetSec = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#141205] to-[#191303] px-[16px] py-[48px] lg:py-[96px] lg:px-[96px] mx-auto">
      <div className="flex flex-col-reverse lg:flex-row  ">
        <div className="flex  flex-col gap-6 bg-transparent border border-t-transparent lg:border-t-[#d4b52c] lg:border-l-transparent border-[#d4b52c] rounded-[0px_0px_24px_24px] lg:rounded-[0px_24px_24px_0px] px-[32px] py-[32px]  justify-center text-[32px] font-[700] text-white w-full lg:w-1/2 font-[pnu-regular]">
          <h2>ھذا البرنامج نقدمه لـ :</h2>
          <div className="flex   items-center gap-4 ">
            <span>
              <Image src={greenC} alt="green circle" />
            </span>
            <p className=" text-[20px] font-[400] text-[#9F9F9F]">
              كل من يبحث عن النمو الشخصي
            </p>
          </div>

          <div className="flex   items-center gap-4 ">
            <span>
              <Image src={greenC} alt="green circle" />
            </span>
            <p className="text-[20px] font-[400] text-[#9F9F9F]">
              كل من يريد أن يتمكن من ذاته وسعادته
            </p>
          </div>

          <div className="flex   items-center gap-4 ">
            <span>
              <Image src={greenC} alt="green circle" />
            </span>
            <p className="text-[20px] font-[400] text-[#9F9F9F]">
              كل من يحب أن تكون حياته أكثر ھدوءا وطمأنينه
            </p>
          </div>

          <div className="flex   items-center gap-4 ">
            <span>
              <Image src={greenC} alt="green circle" width={18} />
            </span>
            <p className="text-[20px] font-[400] text-[#9F9F9F]">
              كل من يسعى لكي يصل إلى التناغم بين حياته وفطرته الطبيعي
            </p>
          </div>

          <div className="flex   items-center gap-2 ">
            <span>
              <Image src={greenC} alt="green circle" width={18} />
            </span>
            <p className="text-[20px] font-[400] text-[#9F9F9F]">
              كل من يريد أن يعيش تناغما واقعيا بين أفكاره وسلوكه وفطرته
            </p>
          </div>
        </div>
        <Image
          src={leftImg}
          alt="image"
          className="hidden lg:block w-[576px]"
        />
        <Image src={leftImgMob} alt="image" className="lg:hidden w-full" />
      </div>
    </div>
  );
};

export default TargetSec;
