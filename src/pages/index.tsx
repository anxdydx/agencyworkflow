import {Button} from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import {lexendDeca, poppins, raleway} from '@/utils/fonts'

const imagesArray = [
  '/important/shoots/image.jpg',
  '/important/shoots/image.jpg',
  '/important/shoots/image.jpg',
  '/important/shoots/image.jpg',
  '/important/shoots/image.jpg',
  '/important/shoots/image.jpg',
  '/important/shoots/image.jpg',
  '/important/shoots/image.jpg',
  '/important/shoots/image.jpg',
  '/important/shoots/image.jpg',
  '/important/shoots/image.jpg',
  '/important/shoots/image.jpg',
]

const ParallaxColumn = ({images}: {images: any}) => {
  return (
    <>
      <div className="column">
        {imagesArray.map((index, item) => {
          return <Image src={index} alt="" className="image" key={item} width={200} height={200} />
        })}
      </div>
    </>
  )
}

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
      <section className="min-xl:max-h-auto h-auto w-full max-xl:px-12">
        <div className="grid grid-cols-6 container max-xl:grid-cols-1 max-xl:flex max-md:flex-col">
          <div className="col-span-2 mt-2">
            <div className="text-dialogue p-4 w-auto h-88 max-h-full">
              <hr className="w-24 float-right -rotate-45 border-black dark:border-white" />
              <h1
                className={`${raleway.className} text-8xl pb-2  max-xl:mr-12  dark:mix-blend-normal uppercase  text-black font-extrabold dark:text-white`}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Naive optimism
              </h1>
              <hr className="w-24 float-right -rotate-45 border-black dark:border-white" />
              <div className="image-pane mt-4">
                <img
                  src="/important/shoots/something.jpg"
                  alt=""
                  className="w-full h-full object-cover light:hidden"
                />
              </div>
              <div className="button-pane mt-4">
                <Button
                  className="btn-one bg-none float-right bg-black text-white dark:bg-white dark:text-black rounded-none uppercase font-bold"
                  size="lg"
                >
                  Meet your protagonist
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-2 relative -z-30">
            <Image
              className=""
              src={'/important/shoots/image.jpg'}
              width={400}
              height={600}
              alt="Hero section home pag"
              data-aos="fade-down"
              data-aos-duration="1500"
            />
            <motion.h1
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 4}}
              className={`cursor-text ${lexendDeca.className} text-5xl absolute bottom-0 -right-12 font-bold max-xl:-right-8 
              
              `}
            >
              PROTAGONIST
            </motion.h1>
          </div>
          <div className="col-span-2 max-xl:mt-4">
            <div className="video-pane w-inherit h-96 relative">
              <img
                src="/important/shoots/som.jpg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="image-anchor h-8 w-4 dark:bg-white absolute -top-3 -right-2 bg-black rotate-180" />
            </div>
            <div className="foot-pax-3d model h-inherit h-12 flex items-center justify-center">
              <motion.span
                className="rounded-full bg-black dark:bg-white w-[8rem] h-[8rem]"
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
              />
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="video-editing-parallax  max-h-screen flex items-center justify-center mt-4 ">
        <div className="wrapper relative h-inherit">
          <div className="text-texture absolute -top-4 -right-2  bg-black p-4">
            <h1 className="text-5xl font-extrabold text-white">#1</h1>
          </div>

          <div className="container imagery-text h-inherit text-center items-center justify-center flex flex-col overflow-x-hidden relative py-[2rem] w-full">
            <img
              src="/images/textures/lens-broke.jpg"
              className="absolute top-0 left-0 w-full h-full object-cover -z-20"
              alt=""
            />
            <h1 className="text-8xl font-extrabold uppercase text-white ">
              The age of video editing
            </h1>
          </div>
        </div>
      </section>

      <section className="video-editing-parallax parallax mt-4">
        <div className="wrapper container"></div>
      </section>
    </React.Fragment>
  )
}

export default index
