import {lexendDeca, poppins, raleway} from '@/utils/fonts'
import Image from 'next/image'
import React from 'react'
import {Button} from '@nextui-org/react'
import {motion} from 'framer-motion'

const index = () => {
  const transitionValues = {
    duration: 0.8,
    yoyo: Infinity,
    ease: 'easeOut',
  }

  const ballStyle = {
    display: 'block',
    width: '4rem',
    height: '4rem',
    backgroundColor: 'white',
    borderRadius: '8rem',
    marginRight: 'auto',
    marginLeft: 'auto',
  }
  return (
    <React.Fragment>
      <section className="max-h-screen h-auto w-full max-xl:px-12">
        <div className="grid grid-cols-6 container max-xl:grid-cols-1 max-xl:flex max-md:flex-col">
          <div className="col-span-2 mt-2">
            <div className="text-dialogue p-4 w-auto h-88 max-h-full">
              <h1
                className={`${raleway.className} text-8xl font-semibold max-xl:mr-12`}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Naive optimistic
              </h1>
              <hr className="w-12 float-right -rotate-45" />
              <div className="button"></div>
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
              className={`cursor-text ${lexendDeca.className} text-5xl absolute bottom-0 -right-12 font-bold max-xl:-right-8`}
            >
              PROTAGONIST
            </motion.h1>
          </div>
          <div className="col-span-2 max-xl:mt-4">
            <div className="video-pane w-inherit h-72 relative">
              <img
                src="/important/shoots/som.jpg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="image-anchor h-8 w-4 dark:bg-white absolute -top-3 -right-2 bg-black rotate-180" />
            </div>
            <div className="foot-pax-3d model h-inherit h-72 flex items-center justify-center">
              <motion.span
              className='rounded-full'
                style={ballStyle}
                transition={{
                  ease: 'easeOut',
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                animate={{
                  y: ['2rem', '4rem', '6rem'],
                  width: ['5rem', '5rem', '6rem'],
                  height: ['5rem', '5rem', '4rem'],
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default index
