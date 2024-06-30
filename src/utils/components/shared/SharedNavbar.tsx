import { AcmeLogo } from "@/utils/constants";
import { poppins } from "@/utils/fonts";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Avatar,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useTheme } from "next-themes";
import { GoHome, GoRepoPush, GoSmiley, GoIssueTracks } from "react-icons/go";

const SharedNavbar = () => {
  const { setTheme, theme } = useTheme();
  const navigateLink = [
    { name: "Home", href: "/", icon: <GoHome /> },
    { name: "Our work", href: "/", icon: <GoIssueTracks /> },
    { name: "Our services", href: "/", icon: <GoRepoPush /> },
    { name: "Testimonials", href: "/", icon: <GoSmiley /> },
    { name: "Download brochure", href: "/", icon: <FaArrowRight /> },
  ];
  return (
    <React.Fragment>
      <Navbar position="sticky">
        <NavbarMenuToggle className="hidden max-[1100px]:block" />
        <NavbarBrand className="mt-1">
          <AcmeLogo />
          <p className={`${poppins.className} font-medium text-inherit`}>
            Agenflow.
          </p>
        </NavbarBrand>
        <NavbarContent className="mt-1 max-[1100px]:hidden" justify="center">
          {navigateLink.map((items) => {
            return (
              <NavbarItem key={items.name}>
                <Link
                  className={`${poppins.className} text-sm font-medium text-inherit dark:text-gray-300 light:text-gray-800 flex flex-row gap-x-1 text-center items-center group/text underline-hover`}
                  href={items.href}
                >
                  {items.name}{" "}
                  <span className="font-medium mx-[0.2px]">{items.icon}</span>
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarMenu className="w-full h-full flex items-center text-center ">
            <div className="links text-center flex items-center flex-col justify-center h-full w-full ">
              {navigateLink.map((items) => {
                return (
                  <NavbarItem key={items.name}>
                    <Link
                      className={`${poppins.className} text-sm font-medium text-inherit dark:text-gray-300 light:text-gray-800 flex flex-row gap-x-1 text-center items-center group/text underline-hover  my-2`}
                      href={items.href}
                    >
                      {items.name}{" "}
                      <span className="font-medium mx-[0.2px]">
                        {items.icon}
                      </span>
                    </Link>
                  </NavbarItem>
                );
              })}
            </div>
          </NavbarMenu>
          <div className="theme-change">
            <Avatar
              size="sm"
              className="cursor-pointer"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            />
          </div>
          <div className="onboarder">
            <Button
              className="dark:bg-[#2563eb] bg-[#2563eb]   shadow-md text-white "
              size="sm"
            >
              Get in touch &rarr;
            </Button>
          </div>
        </NavbarContent>
      </Navbar>
    </React.Fragment>
  );
};

export default SharedNavbar;
