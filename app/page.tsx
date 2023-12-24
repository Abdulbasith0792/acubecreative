import Banner from "@/components/home/banner";
import Services from "@/components/home/services";
import Footer from "@/components/utils/footer";
import Navbar from "@/components/utils/navbar";
import ThemeSwitch from "@/components/utils/themeSwitch";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <Footer />
    </div>
  );
}
