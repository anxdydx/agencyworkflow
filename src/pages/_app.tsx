import "@/styles/globals.css";
import RouteNavbarShared from "@/utils/components/shared/RouteNavbar.shared";
import fonts from "@/utils/fonts";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider
        defaultTheme="system"
        attribute="class"
        themes={["light", "dark"]}
        enableSystem={true}
      >
        <NextUIProvider>
          <div className={`${fonts.raleway.className} font-medium`}>
            <RouteNavbarShared />
            <Component {...pageProps} />
          </div>
        </NextUIProvider>
      </ThemeProvider>
    </>
  );
}
