import '@/sass/out/globals.css'
import SharedNavbar from '@/utils/components/shared/SharedNavbar'
import {inter} from '@/utils/fonts'
import RootProvider from '@/utils/providers/RootProvider'
import {SessionProvider} from 'next-auth/react'
import type {AppProps} from 'next/app'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {FaFacebookSquare, FaGoogle, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {useEffect} from 'react'
import {useTheme} from 'next-themes'
import WorkingBanner from '@/utils/components/shared/WorkingBanner'

function SocialMediaIcons() {
  const {theme} = useTheme()
  return (
    <>
      <ul className="inherit-line flex flex-col fixed bottom-12 right-12 float-right">
        {theme === 'dark' ? (
          <img src="/important/signature.png" alt="" className="h-10 object-cover" />
        ) : (
          <img src="/important/signature-black.png" alt="" className="h-10 object-cover" />
        )}
      </ul>
      <div className="icon-handler absolute bottom-4 p-3 py-4    dark:bg-white bg-black  text-black">
        <ul className="flex gap-4 text-white dark:text-black flex-col text-xl ">
          <li className="list-style-none">
            <FaFacebookSquare />
          </li>
          <li className="list-style-none">
            {' '}
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
  )
}

export default function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
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
  )
}
