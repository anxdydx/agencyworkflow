import { ThemeProvider } from "next-themes";
import React from "react";
import { inter } from "../fonts";
import { NextUIProvider } from "@nextui-org/react";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // @ts-ignore
  return (
    <React.Fragment>
      <ThemeProvider attribute="class" enableSystem defaultTheme="system">
        <NextUIProvider>{children}</NextUIProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
