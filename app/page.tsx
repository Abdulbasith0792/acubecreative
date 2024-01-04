import About from "@/components/home/about";
import Banner from "@/components/home/banner";
import RevenueBanner from "@/components/home/revenueBanner";
import Services from "@/components/home/services";
import Work from "@/components/home/work";
import Footer from "@/components/utils/footer";
import Navbar from "@/components/utils/navbar";
import ThemeSwitch from "@/components/utils/themeSwitch";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* <div className="">
        <div className="bg-red-600 right-0 bottom-0 p-10 text-3xl text-black">
hello
        </div>
      </div> */}
      <Navbar />
      <Banner />
      {/* <About /> */}
      <RevenueBanner />
      <Services />
      <Work />
      <Footer />
    </div>
  );
}
