import '@/sass/out/globals.css'
import SharedNavbar from '@/utils/components/shared/SharedNavbar'
import {inter, manrope} from '@/utils/fonts'
import RootProvider from '@/utils/providers/RootProvider'
import {SessionProvider} from 'next-auth/react'
import type {AppProps} from 'next/app'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {FaFacebookSquare, FaGoogle, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {useEffect} from 'react'
import {useTheme} from 'next-themes'
import {useRouter} from 'next/router'
import {motion, AnimatePresence} from 'framer-motion'
import OnLoadModal from '@/utils/onloadbanner'

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
      <div className="icon-handler fixed bottom-4 p-3 py-4    dark:bg-white bg-black  text-black">
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
  const router = useRouter()
  return (
    <>
      <SessionProvider session={session}>
        <RootProvider>
          <AnimatePresence mode="wait">
            <motion.div
              key={router.pathname}
              className={`${inter.className} `}
              suppressHydrationWarning
            >
              <SharedNavbar />
              <Component {...pageProps} />
              <SocialMediaIcons />
              <motion.div
                className="slide-in dark:bg-white flex flex-col text-center items-center justify-center"
                initial={{scaleY: 0}}
                animate={{scaleY: 0}}
                exit={{scaleY: 1}}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
              >
                <h1 className={`${manrope.className} dark:text-black text-white font-semibold text-6xl`}>Agenflow.</h1>
              </motion.div>

              <motion.div
                className="slide-out dark:bg-white flex flex-col text-center items-center justify-center"
                initial={{scaleX: 1}}
                animate={{scaleX: [0.34, 0]}}
                exit={{scaleX: 1}}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                <h1  className={`${manrope.className} dark:text-black text-white font-semibold text-6xl `}>Agenflow.</h1>
              </motion.div>
            </motion.div>
            {typeof window !== 'undefined' &&
              !session &&
              !localStorage.getItem('onLoadModalViewed') && (
                <OnLoadModal closeOn={() => localStorage.setItem('onLoadModalViewed', 'true')} />
              )}
          </AnimatePresence>
        </RootProvider>
      </SessionProvider>
    </>
  )
}
