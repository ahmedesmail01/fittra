import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LastSec from "@/components/LastSec";
import SecAdv from "@/components/SecAdv";
import SecOne from "@/components/SecOne";
import SecPresent from "@/components/SecPresent";
import SecSwiper from "@/components/SecSwiper";
import SuccessClients from "@/components/SuccessClients";
import TargetSec from "@/components/TargetSec";
import VideoSwiper from "@/components/VideoSwiper";

export default function Home() {
  return (
    <main dir="rtl" className=" w-screen max-w-full bg-gray-400">
      <Hero />
      <SecOne />
      <SecSwiper />
      <SecAdv />
      <SecPresent />
      <TargetSec />
      {/* <VideoSwiper /> */}
      <SuccessClients />
      <LastSec />
      <Footer />
    </main>
  );
}
