import {Button} from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import {lexendDeca, manrope, quicksand, raleway} from '@/utils/fonts'
import IndexParallaxThree from '@/utils/components/animated/IndexParallaxThree'
import Head from 'next/head'
import {AcmeLogo} from '@/utils/constants'

const index = () => {
  const transitionValues = {
    duration: 0.8,
    yoyo: Infinity,
    ease: 'easeOut',
  }

  const ballStyle = {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
  }
  return (
    <React.Fragment>
      <Head>
        <title>Agenflow. Inc</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Home | Agenflow" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <section className=" min-xl:max-h-auto h-auto w-full max-xl:px-12">
        <div className="grid grid-cols-6 container max-xl:grid-cols-1 max-xl:flex max-xl:flex-col">
          <div className="col-span-2 mt-2">
            <div className="text-dialogue p-4 w-auto h-88 max-h-full">
              <hr className="w-24 float-right max-sm:hidden -rotate-45 border-black dark:border-white" />
              <h1
                className={`${raleway.className} max-sm:text-6xl max-sm:font-font-extrabold text-8xl pb-2  max-xl:mr-12  dark:mix-blend-normal uppercase  text-black font-extrabold dark:text-white`}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Naive optimism
              </h1>
              <hr className="w-24 float-right  -rotate-45 border-black dark:border-white" />
              <div className="image-pane mt-4 relative">
                <div className="image-anchor h-8 w-4 -z-10 dark:bg-white absolute -top-3 -right-2 bg-black rotate-180" />
                <div className="image-anchor h-8 w-4 -z-10 dark:bg-white absolute -top-3 -left-2 bg-black rotate-180" />
                <div className="image-anchor h-8 w-4 -z-10 dark:bg-white absolute -bottom-3 -left-2 bg-black rotate-180" />
                <div className="image-anchor h-8 w-4 -z-10 dark:bg-white absolute -bottom-3 -right-2 bg-black rotate-180" />

                <img
                  data-aos="fade-up"
                  src="/important/shoots/something.jpg"
                  alt=""
                  className="w-full h-full object-cover light:hidden"
                />
              </div>
              <div className="button-pane mt-4 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
                <Button
                  className="btn-one bg-none float-right bg-black text-white dark:bg-white dark:text-black max-sm:my-8 rounded-none  uppercase font-bold"
                  size="md"
                >
                  Meet your protagonist
                </Button>
              </div>
            </div>
          </div>
          <div className="max-sm:container col-span-2 max-md:flex max-md:items-center max-md:justify-center relative  -z-30">
            <hr className="w-24 float-right rotate-45 border-black dark:border-white" />
            <Image
              className="m-auto  max-xl:hidden max-md:block"
              src={'/important/shoots/image.jpg'}
              width={400}
              height={600}
              alt="Hero section home pag"
              data-aos="fade-down"
              data-aos-duration="1500"
            />

            <hr className="w-24 - rotate-45 border-black dark:border-white" />

            <motion.h1
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 4}}
              className={`cursor-text ${lexendDeca.className} text-5xl absolute bottom-0 -right-12 font-bold max-xl:-right-8 max-md:text-3xl max-md:bottom-0 max-md:-right-4 dark:bg-white dark:text-black bg-black text-white 
              `}
            >
              PROTAGONIST
            </motion.h1>
          </div>
          <div className="col-span-2  max-xl:mt-4">
            <div className="video-pane w-inherit h-96 relative">
              <div className="image-anchor h-8 w-4 dark:bg-white absolute -bottom-3 -left-2  bg-black rotate-180" />
              <div className="image-anchor h-8 w-4 dark:bg-white absolute -top-3 -left-2  bg-black rotate-180" />
              <div className="image-anchor h-8 w-4 dark:bg-white absolute -bottom-3 -right-2  bg-black rotate-180" />
              <img
                src="/important/shoots/som.jpg"
                alt=""
                data-aos="fade-up"
                data-aos-duration="2000"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="image-anchor h-8 w-4 -z-10 dark:bg-white absolute -top-3 -right-2 bg-black rotate-180" />
            </div>
            <div className="foot-pax-3d model h-inherit h-12 flex flex-col text-center items-center justify-center">
              {/* <motion.span
                // maybe i would change it further ball-hidden-query
                className="rounded-full max-sm:hidden  bg-black dark:bg-white w-[8rem] h-[8rem]"
                style={ballStyle}
                transition={{
                  ease: 'easeOut',
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                animate={{
                  y: ['4rem', '8rem', '6rem'],
                  width: ['8rem', '5rem', '3rem'],
                  height: ['8rem', '5rem', '2rem'],
                }}
              /> */}

              {/* <div className='text-6xl font-bold'>は</div> */}
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="video-editing-parallax-banner   max-h-screen flex items-center justify-center mt-4 ">
        <div className="wrapper relative h-inherit">
          <div className="text-texture absolute -top-4 -right-2 max-md:right-0 z-20  bg-black p-4">
            <h1 className="text-5xl font-extrabold text-white">#1</h1>
          </div>

          <div className="container imagery-text h-inherit text-center items-center justify-center flex flex-col overflow-x-hidden relative py-[2rem] w-full">
            <img
              src="/images/textures/lens-broke.jpg"
              data-aos="fade-right"
              data-aos-duration="2000"
              className="absolute top-0 left-0 w-full h-full object-cover -z-20"
              alt=""
            />
            <h1
              className="text-8xl font-extrabold max-md:mt-12 max-sm:text-4xl uppercase text-white"
              data-aos="fade-down"
            >
              The realm of video editing
            </h1>
          </div>
        </div>
      </section>

      <section className="video-editing-parallax  mt-8">
        <div className="wrapper container">
          <IndexParallaxThree />
        </div>
      </section>

      <section className="who-we-are container  mt-8 relative h-auto">
        <div className="pointer-circle w-12 h-12 absoute mb-2  top-0 left-0 bg-black dark:bg-white" />
        <div className="grid grid-cols-6 max-md:grid-cols-1 max-md:flex max-md:flex-col px-6">
          <div className="col-span-4 relative">
            <div className="text-pane ">
              <h1 className="text-6xl  text-aboute-agenflow  -rotate-90 uppercase bg-white text-black font-bold w-auto sticky left-1 px-4">
                About agenflow
              </h1>
            </div>
          </div>
          <div className="col-span-2">
            <div className="image-container relative h-48 w-full">
              <Image
                src={'/images/textures/kitwave.jpg'}
                className="w-full h-full absolute top-0 left-0 object-cover"
                width={400}
                height={800}
                alt=""
              />
            </div>
            <div className="image-pane-more bg-cyan-500 h-96 relative mt-5 w-full">
              <Image
                src={'/images/textures/texture-wave.jpg'}
                className="w-full h-full absolute top-0 left-0 object-cover"
                width={400}
                height={800}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <br />

      <section className="container 3d models h-[40vh]">
        <h1>Attractive 3d models to build</h1>
      </section>

      <section className="container ninja-style-revealing-page h-[70vh] flex justify-between items-center max-md:flex-col">
        <div className="">
          <div className="w-4 h-12 bg-black dark:bg-white" />
        </div>
        <div className="flex justify-between ">
          <div className="w-24 h-24 rounded-full  bg-black dark:bg-white" />
        </div>
        <div className="flex justify-between ">
          <div className="w-4 h-12 bg-black dark:bg-white">03</div>
        </div>
      </section>

      <section className="our-work-set h-auto p-8 ">
        <div className=" grid grid-cols-3 max-md:grid-cols-1 max-md:grid-rows-3 mt-4 gap-3">
          <div className="border-1 border-black dark:border-white p-6 ">
            <h1 className="font-bold text-2xl">Video editing</h1>
            <p className={`${manrope.className} mt-3 font-light`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt cupiditate, voluptates
              iste ratione amet suscipit accusamus eum asperiores tempora tenetur, quisquam deleniti
              maxime vero velit aspernatur consectetur molestias laboriosam aliquid.
            </p>
            <div className="imagery-pane mt-4 relative h-[10rem] w-full">
              <img
                src="/important/shoots/cam.jpg"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="bg-black text-white dark:bg-white dark:text-black p-6">
            <h1 className="font-bold text-2xl">Personal Brand.</h1>
            <p className={`${manrope.className} mt-3 font-light`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt cupiditate, voluptates
              iste ratione amet suscipit accusamus eum asperiores tempora tenetur, quisquam deleniti
              maxime vero velit aspernatur consectetur molestias laboriosam aliquid.
            </p>
            <div className="imagery-pane mt-4 relative h-[10rem] w-full bg-cyan-500">
              <img
                src="/important/shoots/cam.jpg"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="border-1 border-black dark:border-white p-6">
            <h1 className="font-bold text-2xl">Online presence</h1>
            <p className={`${manrope.className} mt-3 font-light`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt cupiditate, voluptates
              iste ratione amet suscipit accusamus eum asperiores tempora tenetur, quisquam deleniti
              maxime vero velit aspernatur consectetur molestias laboriosam aliquid.
            </p>
            <div className="imagery-pane mt-4 relative h-[10rem] w-full bg-cyan-500">
              <img
                src="/important/shoots/cam.jpg"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="detailed-explaination mt-6 m-auto flex items-center   bg-none w-full ">
          <Button className="bg-black text-white dark:bg-white dark:text-black text-center  rounded-none hover:bg-white hover:text-black m-auto">
            Get detail info.
          </Button>
        </div>
      </section>
      <br />
      <section className="footer">
        <footer className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className={`${manrope.className} ml-3 text-xl`}>Agenflow</span>
              </a>
              <p className="mt-2 text-sm text-gray-500">
                Air plant banjo lyft occupy retro adaptogen indego
              </p>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-500 text-sm text-center sm:text-left">
                © 2020 Tailblocks —
                <a
                  href="https://twitter.com/knyttneve"
                  rel="noopener noreferrer"
                  className="text-gray-600 ml-1"
                  target="_blank"
                >
                  @knyttneve
                </a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </section>
    </React.Fragment>
  )
}

export default index
