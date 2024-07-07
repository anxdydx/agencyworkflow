import React, {useRef} from 'react'
import Image from 'next/image'
import {useScroll, useTransform, motion} from 'framer-motion'

const IndexParallaxThree = () => {
  const parallaxContainer = useRef(null)
  const {scrollYProgress} = useScroll({
    target: parallaxContainer,
    offset: ['start start', 'end end'],
  })
  const scaleTransformTwo = useTransform(scrollYProgress, [0, 1], [1, 2])
  const scaleTransformFour = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scaleTransformFive = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scaleTransformSix = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scaleTransformEight = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scaleTransformNine = useTransform(scrollYProgress, [0, 1], [1, 9])
  const scaleTransformTen = useTransform(scrollYProgress, [0, 1], [1, 10])

  const inverseOpacity = useTransform(scrollYProgress, [0.2, 1], [0.5, 1])
  const pictures = [
    {source: '/important/shoots/steve.jpg', scale: scaleTransformFour},
    {source: '/important/shoots/cam.jpg', scale: scaleTransformTen},
    {source: '/important/shoots/camera.jpg', scale: scaleTransformFour},
    {source: '/important/shoots/image.jpg', scale: scaleTransformNine},
    {source: '/important/shoots/som.jpg', scale: scaleTransformFour},
    {source: '/important/shoots/somes.jpg', scale: scaleTransformEight},
    {source: '/important/shoots/something.jpg', scale: scaleTransformEight},
  ]
  return (
    <div className="parallax-container" ref={parallaxContainer}>
      <div className="sticky">
        {pictures.map(({source, scale}, index) => (
          <motion.div style={{scale: scale}} className="element" key={index}>
            <motion.div style={{opacity: inverseOpacity}} className="image-component">
              <Image src={source}  alt="image" layout="fill" className="image" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default IndexParallaxThree
