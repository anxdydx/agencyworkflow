import "@/sass/out/globals.css";
import SharedNavbar from "@/utils/components/shared/SharedNavbar";
import { inter } from "@/utils/fonts";
import RootProvider from "@/utils/providers/RootProvider";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import {
  FaFacebookSquare,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function SocialMediaIcons() {
  return (
    <>
      <ul className="inherit-line flex flex-col absolute bottom-12 right-12 float-right">
        <img src="/important/signature.png" alt="" className="h-8 object-cover"/>
      </ul>
      <div className="icon-handler absolute bottom-12 left-12">
        <ul className="flex gap-4 flex-col text-xl">
          <li className="list-style-none">
            <FaFacebookSquare />
          </li>
          <li className="list-style-none">
            {" "}
            <FaInstagram />
          </li>
          <li className="list-style-none">
            <FaLinkedin />
          </li>
          <li className="list-style-none">
            <FaGoogle />
          </li>
        </ul>
      </div>
    </>
  );
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <RootProvider>
          <div className={`${inter.className} `} suppressHydrationWarning>
            <SharedNavbar />
            <Component {...pageProps} />
            <SocialMediaIcons />
          </div>
        </RootProvider>
      </SessionProvider>
    </>
  );
}
