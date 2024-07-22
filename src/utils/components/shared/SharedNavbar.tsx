import {AcmeLogo} from '@/utils/constants'
import {poppins} from '@/utils/fonts'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  Tooltip,
  Switch,
} from '@nextui-org/react'
import React, {useEffect} from 'react'
import Link from 'next/link'
import {FaArrowRight} from 'react-icons/fa'
import {useTheme} from 'next-themes'
import {GoHome, GoRepoPush, GoSmiley, GoIssueTracks} from 'react-icons/go'
import {motion, useScroll} from 'framer-motion'
import {HiOutlineMoon, HiOutlineSun} from 'react-icons/hi'
import {AiFillSmile} from 'react-icons/ai'

const ChangeTheme = () => {
  const {setTheme, theme} = useTheme()
  return (
    <Button
      size="sm"
      isIconOnly
      className="    shadow-md text-white"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <HiOutlineSun className="text-lg text-black" />
      ) : (
        <HiOutlineMoon className="text-lg" />
      )}
    </Button>
  )
}

const ViewWorkPane = () => {
  const [viewOnclick, setViewOnclick] = React.useState(false)
  return (
    <React.Fragment>
      <motion.div
        className={`${viewOnclick ? 'block' : 'hidden'} fixed  h-screen w-full bg-rose-500`}
      >
        Jack im here
      </motion.div>
      <Tooltip
        content="Our projects"
        showArrow
        classNames={{
          content: [
            'bg-gradient-to-r from-white to-gray-800 text-white animation-pulse font-semibold ',
          ],
        }}
      >
        <Button
          className="from-white to-gray-800 dark:bg-transparent dark:border-gray-500 border-[1.5px] shadow-md"
          size="sm"
          isIconOnly
          onClick={() => setViewOnclick(!viewOnclick)}
        >
          <AiFillSmile className="text-lg text-white" />
        </Button>
      </Tooltip>
    </React.Fragment>
  )
}

const SharedNavbar = () => {
  const {setTheme, theme} = useTheme()
  const [scrollY, setScrollY] = React.useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const navigateLink = [
    {name: 'Home', href: '/', icon: <GoHome />},
    {name: 'Our work', href: '/route/ourwork', icon: <GoIssueTracks />},
    {name: 'Our services', href: '/route/ourservices', icon: <GoRepoPush />},
    {name: 'Testimonials', href: '/route/testimonials', icon: <GoSmiley />},
    {name: 'Download brochure', href: '/', icon: <FaArrowRight />},
  ]
  return (
    <motion.div>
      <Navbar shouldHideOnScroll className={`${scrollY > 50 ? ' fixed bg-black text-white border-b border-gray-900' : ''}`} isBlurred={false}>
        <NavbarMenuToggle className="hidden max-[1100px]:block" />
        <NavbarBrand className="mt-1">
          <AcmeLogo />
          <p className={`${poppins.className} font-medium text-inherit`}>Agenflow.</p>
        </NavbarBrand>
        <NavbarContent className="mt-1 max-[1100px]:hidden" justify="center">
          {navigateLink.map((items) => {
            return (
              <NavbarItem key={items.name}>
                <Link
                  className={`${poppins.className} text-sm font-medium text-inherit  flex flex-row gap-x-1 text-center items-center group/text underline-hover `}
                  href={items.href}
                >
                  {items.name} <span className="font-medium mx-[0.2px]">{items.icon}</span>
                </Link>
              </NavbarItem>
            )
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
                      {items.name} <span className="font-medium mx-[0.2px]">{items.icon}</span>
                    </Link>
                  </NavbarItem>
                )
              })}
            </div>
          </NavbarMenu>
          <div className="theme-change">{/* //workpane modal */}</div>
          <div className="switch">
            <Switch
              size="sm"
              color="default"
              classNames={{label: 'text-white'}}
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
          </div>
          <div className="onboarder">
            <Button
              className="rounded-none bg-black text-white dark:bg-white dark:text-black"
              size="sm"
            >
              Get in touch &rarr;
            </Button>
          </div>
        </NavbarContent>
      </Navbar>
    </motion.div>
  )
}

export default SharedNavbar
