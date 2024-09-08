import Image from "next/image";
import React from "react";
import backImgWeb from "../../public/assets/medium-shot-smiley-woman-nature 1.png";
import backImgMob from "../../public/assets/Group 1321314440.png";

const SecAdv = () => {
  return (
    <div className="relative min-h-screen bg-black pt-10 pb-40">
      <h2 className="z-20 absolute top-[3%] md:top-[8%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 self-stretch text-white text-center font-[pnu-regular] text-[32px]  md:text-[40px] font-bold leading-[160%]">
        مميزات البرنامج
      </h2>
      <div className="absolute z-10 w-full h-full top-0 left-0 hidden sm:block bg-gradient-to-b from-black to-transparent "></div>
      <div className="absolute z-10 w-full h-full bottom-0 left-0 bg-gradient-to-t  from-[#1a1304] to-transparent bg-[#000000db]"></div>

      <Image
        src={backImgMob}
        alt="image back mobile"
        className="absolute top-0 left-0 w-full sm:hidden"
      />
      <Image
        src={backImgWeb}
        alt="background image"
        layout="fill"
        objectFit="cover"
        className="hidden sm:block"
      />

      <div className="flex flex-wrap z-20 justify-center mb-10 md:mb-[96px]  items-center pt-28 gap-[32px] px-4 lg:px-[96px]">
        {data.map((item) => (
          <div
            key={item.id}
            className="card-box px-[8px] pt-[24px] pb-[40px] z-30 flex flex-col rounded-lg max-w-full font-[pnu-regular] w-[253.5px] h-[204px] justify-center  items-center   bg-gradient-to-b from-black to-transparent "
          >
            <h3 className="text-[20px] text-center font-[pnu-regular] font-[700] text-white ">
              {item.title}
            </h3>
            <p className="flex flex-wrap justify-center flex-[1_0_0] self-stretch text-white text-center font-[pnu-light]  font-normal leading-[normal]">
              {item.description}
            </p>
          </div>
        ))}
        <h2 className="absolute bottom-10 z-30 text-white font-[700]  text-[32px] md:text-[40px]  font-[pnu-regular] text-center">
          هذا البرنامج يقدمه
        </h2>
      </div>
    </div>
  );
};

export default SecAdv;

const data = [
  {
    id: 4,
    title: "منهجية علمية ومدروسة",
    description: " في بيئة تعليمية تفاعلية تضمن حصولك على أقصى استفادة",
  },
  {
    id: 3,
    title: "توجيه شخصي",
    description: "يقدم البرنامج توجيهات فردية تساعدك على تحقيق أھدافك الشخصية",
  },
  {
    id: 2,
    title: "خبراء مؤهلين",
    description:
      "يقدَّم البرنامج من قِ َبَِل خبراء لدیھم خبرة تزيد عن 21 عاًمًا في مجالات القيادة والتحول الفطري.",
  },
  {
    id: 1,
    title: "تحقيق التوازن",
    description:
      "يساعدك البرنامج على استعادة توازنك النفسي وتحقيق التناغم بين حياتك الشخصية والمهنية",
  },
  {
    id: 8,
    title: "بيئة داعمة",
    description:
      " فرصة لبناء علاقات جديدة مع مشاركين يشاركونك نفس القيم والأھداف",
  },
  {
    id: 7,
    title: "شهادات معتمدة",
    description:
      " عند اجتياز البرنامج، تحصل على شهادة معتمدة من معهد Fittra Leadership.",
  },
  {
    id: 6,
    title: "التحول الواقعي",
    description:
      " البرنامج ليس أكادیمًيا بحًتًا، بل يرتكز على تجارب واقعية وممارسات عملية",
  },
  {
    id: 5,
    title: "دعم مستمر",
    description:
      " يوفر البرنامج دعًمًا مستمًرًا بعد الانتهاء لضمان تطبيق المعرفة المكتسبة",
  },
  {
    id: 10,
    title: "تنمية مستدامة",
    description:
      "  يساعدك البرنامج على تحقيق تقدم مستدام في حياتك الشخصية والمهنية",
  },
  {
    id: 9,
    title: "تجربة شاملة",
    description:
      "  البرنامج يجمع بين التدريب النظري والتطبيق العملي لتحقيق أفضل النتائج",
  },
];

/* <div
            key={item.id}
            className="p-[3px] z-20 relative bg-gradient-to-b from-[#876514] to-brown-700 rounded-lg"
          >
            <div className="flex flex-col rounded-lg max-w-full font-[pnu-regular] w-[253.5px] h-[204px] justify-center  items-center gap-[32px] pt-6 pb-10 px-2 bg-gradient-to-b from-black to-transparent ">
              <h3 className="text-[20px] text-center font-[pnu-regular] text-white">
                {item.title}
              </h3>
              <p className="flex flex-wrap justify-center flex-[1_0_0] self-stretch text-white text-center font-[pnu-light] text-base font-normal leading-[normal]">
                {item.description}
              </p>
            </div>
          </div> */
