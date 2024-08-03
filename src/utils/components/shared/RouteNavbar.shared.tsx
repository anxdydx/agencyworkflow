import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  Switch,
} from "@nextui-org/react";
import Link from "next/link";
import { AcmeLogo } from "@/utils/constants";
import fonts from "@/utils/fonts";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiBars3, HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const ResponsiveSheet = (linkableItems: any) => {
  const [offWidth, setOffWidth] = React.useState(false);
  const opacityMotionArray = [0.1, 0.45, 0.1, 0.69, 0.91, 1];

  return (
    <div>
      <Button
        size="sm"
        as={Link}
        color="primary"
        href="#"
        variant="flat"
        className="bg-transparent rounded-none"
        onClick={() => setOffWidth(!offWidth)}
      >
        <HiBars3 className="text-2xl text-white" />
      </Button>
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: offWidth ? 0 : "-300%",
          opacity: offWidth ? opacityMotionArray : opacityMotionArray.reverse(),
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className=" bg-gray-800 top-0 left-0  fixed w-full h-screen"
      >
          <Button
            size="sm"
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="bg-transparent rounded-none absolute top-8  z-20 right-6"
            onClick={() => setOffWidth(!offWidth)}
          >
            <HiBars3 className="text-4xl text-white " />
          </Button>
        <div className="content-wrapper space-justify-around   bg-black w-full h-full grid grid-cols-4 max-xl:grid-cols-1">
          <div className=" bg-white  ">
            <div className="bg-cyan-500 h-[80%] relative">
              <img src="https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full absolute top-0 left-0 object-cover" alt="" />
            </div>
            <div className="h-[20%] p-4 flex text-center  items-center">
              <h1 className={`${fonts.dmSans.className} text-black text-2xl font-bold `}>Agenflow studios</h1>              
            </div>
          </div>
          <div className=" p-12 relative col-span-3 block">
            <h1  className={`${fonts.manrope.className} font-bold text-5xl`}>Agenflow studios</h1>
            <div className="navigation-links mt-4 text-end">
              <h1 className="text-6xl font-medium cursor-pointer text-gray-400">Home</h1>
              <h1 className="text-6xl font-medium cursor-pointer text-gray-400">Reach us out</h1>
              <h1 className="text-6xl font-medium cursor-pointer text-gray-400">Our work</h1>
              <h1 className="text-6xl font-medium cursor-pointer text-gray-400">Happy clients</h1>
              <h1 className="text-6xl font-medium cursor-pointer text-gray-400">Services</h1>
              <h1 className="text-6xl font-medium cursor-pointer text-gray-400">Download our brouchure</h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const RouteNavbarShared = () => {
  const { theme, setTheme } = useTheme();
  const iterableItems = [
    { linkName: "Home", linkToHref: "/", dropdownItems: [], iconPlaceable: "" },
    {
      linkName: "Our services",
      linkToHref: "/routes/Services",
      dropdownItems: [],
      iconPlaceable: "",
    },
    {
      linkName: "Our workflows",
      linkToHref: "/routes/Workflows",
      dropdownItems: [],
      iconPlaceable: "",
    },
    {
      linkName: "Reach us out.",
      linkToHref: "/routes/Reachout",
      dropdownItems: [],
      iconPlaceable: "",
    },
    {
      linkName: "Any suggestions.?",
      linkToHref: "/routes/suggestions",
      dropdownItems: [],
      iconPlaceable: "",
    },
  ];
  return (
    <>
      <Navbar isBlurred={false}>
        <NavbarBrand>
          <img
            src="/images/svg/text-logo.svg"
            className="w-12 h-12"
            alt="Agenflow studios logo"
          />
        </NavbarBrand>
        <NavbarContent justify="center">
          <p className="font-bold dark:stroke-dark text-inherit dark:text-white text-black text-[15px]">
            Agenflow Studios.
          </p>
        </NavbarContent>
        <NavbarContent justify="end">
          {/* palce your nice outflow here */}
          <NavbarItem>
            <ResponsiveSheet />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default RouteNavbarShared;
