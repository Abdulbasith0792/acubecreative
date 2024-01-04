import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider  from "./themeProvider/page";
import { Kanit } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/utils/navbar";
import Footer from "@/components/utils/footer";


const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({ weight: "300", subsets: ['thai']});


export const metadata: Metadata = {
  title: "AcubeCreative",
  description: "Grow Your Business using Services we offer here @ acubecreative",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kanit.className} bg-[#fff] dark:bg-[#000] scrollbar-thin scrollbar-thumb-orange-500 dark:scrollbar-track-transparent dark:scrollbar-none scrollbar-track-inherit dark:scrollbar-thumb-white  `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
          <div className="scrollbar-hide">
           
            <div className="">{children}</div>
          
            </div>
        </ThemeProvider>
        <Script src="../path/to/flowbite/dist/flowbite.min.js" />
      </body>
    </html>
  );
}
