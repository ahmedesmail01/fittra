"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import {
  cn,
  RadioGroup,
  RadioProps,
  useRadio,
  VisuallyHidden,
} from "@nextui-org/react";

export const CustomRadio = (props: RadioProps) => {
  const {
    Component,
    children,
    isSelected,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center justify-between bg-transparent hover:bg-[#cbffd033] flex-row-reverse",
        "max-w-full cursor-pointer border-2 border-transparent rounded-lg gap-2 h-[86px] px-4",
        "data-[selected=true]:border-primary data-[selected=true]:bg-[#cbffd033] !rounded-[20px]"
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && (
          <span className="text-small text-foreground opacity-70">
            {description}
          </span>
        )}
      </div>
    </Component>
  );
};

export default function RadioButtons({ setSelect }: { setSelect: any }) {
  return (
    <RadioGroup
      onChange={(e) => setSelect(e.target.value)}
      label=""
      className="w-full"
    >
      <CustomRadio
        classNames={{
          label: "!gap-0",
        }}
        value="cash"
      >
        <div className="w-full bg-transparent flex items-center justify-between  ">
          <h2 className="flex font-[pnu-bold]  text-white  flex-col justify-center flex-[1_0_0] self-stretch   text-right font-expo-medium lg:font-expo-bold text-base lg:text-2xl font-medium leading-[160%]">
            للدفع كاش
          </h2>
        </div>
      </CustomRadio>
      <CustomRadio value="installment">
        <div className="w-full flex items-center justify-between bg-transparent">
          <h2 className="flex font-[pnu-bold] text-white flex-col justify-center flex-[1_0_0] self-stretch  text-right font-expo-medium lg:font-expo-bold text-base lg:text-2xl leading-[160%] ">
            للتقسيط بدون فوائد{" "}
          </h2>
        </div>
      </CustomRadio>
    </RadioGroup>
  );
}
