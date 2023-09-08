import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sora } from "next/font/google";
import ActiveSectionContextProvider from "@/components/ActiveSectionContextProvider";
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Essoh portfolio",
  description: "Essohanam is full stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} h-[200vh] bg-gray-50 text-gray-950 pt-28 sm:pt-36 `}
      >
        <div
          className="bg-[#dbd7fb] absolute top-[-6rem]
           right-[11rem] h-[31.25rem] 
        w-[31.25rem] -z-10 rouded-ful 
        blur-[10rem] sm:w-[-68.75rem]"
        ></div>
        <div
          className="bg-[#fbe2e3] absolute top-[-1rem]
           left-[-35rem] h-[31.25rem] 
        w-[-50rem] -z-10 rouded-ful blur-[10rem] 
        sm:w-[-68.75rem] md:left-[-33rem] lg:left-[-28rem]
        xl:left-[-15rem] 2xl:left-[-5rem] "
        ></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
