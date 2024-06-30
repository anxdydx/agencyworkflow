import "@/sass/out/globals.css";
import SharedNavbar from "@/utils/components/shared/SharedNavbar";
import { inter } from "@/utils/fonts";
import RootProvider from "@/utils/providers/RootProvider";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <RootProvider>
          <div className={`${inter.className}`} suppressHydrationWarning>
          <SharedNavbar />
            <Component {...pageProps} />
          </div>
        </RootProvider>
      </SessionProvider>
    </>
  );
}
