"use client";
import React, { useState } from "react";
import RadioButtons from "./RadioButtons";
import { Button } from "@nextui-org/react";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import imgWeb from "../../public/assets/Rectangle 790.png";
import imgMob from "../../public/assets/Rectangle 790 mob.png";

const Subscribe = () => {
  return (
    <div
      className="spacing bg-[#271c04] px-[16px] lg:py-[96px] py-4"
      id="subscribe"
    >
      <div className="  flex flex-col-reverse lg:flex-row justify-center items-center gap-6 lg:gap-12 self-stretch [background:#3a3016]   min-h-[740px] px-4 lg:px-12 rounded-[32px]">
        <div className="lg:flex-1">
          <RightBox />
        </div>
        <div className="w-full basis-fit pt-[24px] lg:basis-[572px]">
          <Image
            src={imgMob}
            alt=""
            width={572}
            height={672}
            className="max-w-full w-full lg:hidden"
          />
          <Image
            src={imgWeb}
            alt=""
            width={572}
            height={672}
            className="hidden lg:block 
          "
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

/* const Advantages1 = [
  {
    id: 1,
    main: "سجل واحصل على مكافآت بقيمة 2400$ عند اشتراكك اليوم",
  },
  {
    id: 2,
    main: "12 حلقة من برنامج الرجل الكسيب للذكور بقيمة: 400 دولار",
  },
  { id: 3, main: "12 حلقة من برنامج القيم بقيمة: 100 دولار" },
  {
    id: 4,
    main: "متابعة يومية مع مرشد علاجي بقيمة: 300 دولار",
  },
  {
    id: 5,
    main: "جلسة متابعة مع المرشد العلاجي أسبوعيا بقيمة: 1200 دولار",
  },
  {
    id: 6,
    main: "العدد محدود سارع بالحجز  ",
  },
]; */

const RightBox = () => {
  const [select, setSelect] = useState("");
  const router = useRouter();
  return (
    <div className="w-full flex flex-col gap-6 py-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h2 className="self-stretch  text-right text-white font-expo-bold text-[32px] font-[pnu-bold]  font-bold leading-[160%]">
            أشترك الان
          </h2>
        </div>

        <p className="self-stretch mb-[16px] text-white font-[pnu-light] text-[16px] lg:text-[20px] text-right font-expo-bold text-xl font-[700] ">
          اكتسب فهمًا عميقا لفطرتك وتعلم كيف تعيش وفًقًا لها حياة مليئة بالسعادة
          ومفعمة بالحيوية والقدرة اشترك معنا الآن في برنامج (حياة الفطرة) سعر
          البرنامج:{" "}
        </p>

        <div
          id="adv-1"
          className="flex mb-10 flex-col gap-2 text-white font-[pnu-regular] bg-[#4a3a18] rounded-xl px-[24px] py-[16px]"
        >
          <h2 className="text-center font-[pnu-bold] mb-[16px] text-white text-[20px] lg:text-[24px]">
            سعر البرنامج  1000$
          </h2>
          <p className="text-center font-[pnu-bold] mb-[16px] text-[#0000ff] text-[20px]">
            كن من اول 100 مشترك واحصل علي البرنامج بسعر 590 $
          </p>
          <p className="text-center font-[pnu-bold] mb-[16px] text-[#ff0000] text-[20px]">
            خصم إضافي 100$ عند الدفع نقدا
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <RadioButtons setSelect={setSelect} />
        <Button
          isDisabled={!select}
          onPress={() => {
            // if (select === "cash") {
            //   router.push("https://buy.stripe.com/28o3cs77kcIS0QU6oV");
            // } else if (select === "installment") {
            //   router.push(
            //     "https://mtnhealingcenter.com/diabetes/installment-form/"
            //   );
            // }

            if (select == "cash") {
              if (typeof window !== "undefined" && window.dataLayer) {
                window.dataLayer.push({
                  event: "cash-click",
                });
              }
              router.push("#");
            } else {
              if (typeof window !== "undefined" && window.dataLayer) {
                window.dataLayer.push({
                  event: "installment-click",
                });
              }
              setTimeout(() => {
                router.push("#");
              }, 2000);
            }
          }}
          className="flex h-[72px] py-[24px] font-[pnu-bold] text-[#ffffff] text-[24px] lg:text-[32px] justify-center items-center gap-1 self-stretch [background:linear-gradient(95deg,#179963_26.98%,#FEBD21_118%)] px-4 rounded-[20px]"
        >
          اشترك الآن
        </Button>
      </div>
    </div>
  );
};
