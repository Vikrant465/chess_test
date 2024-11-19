import Image from "next/image";
import localFont from "next/font/local";
import Nav from "../pages/navbar"
import {NextUIProvider} from '@nextui-org/react'
import Home1 from "./home";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <NextUIProvider>
      <Nav></Nav>
      <Home1></Home1>

    </NextUIProvider>
  );
}
