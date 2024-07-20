import {manrope} from '@/utils/fonts'
import React from 'react'
import {HiAdjustmentsHorizontal} from 'react-icons/hi2'

const ourwork = () => {
  return (
    <main className="ourwork-main-page">
      <section className="header-main-section h-[85vh]   w-full max-h-[150vh] overflow-x-hidden flex flex-col text-start items-start  justify-center px-8">
        <div className=" border border-black text-magery bg-white w-full py-8">
          <h1
            className={`${manrope.className} text-7xl font-bold 
        `}
          >
            Creativity is intelligence, <br /> - Have fun with it
          </h1>
          <span className="text-3xl font-medium mt-8 float-right">
            {' '}
            <span></span> Albert Einstein
          </span>
        </div>

        <img
          src="/svg/astro.svg"
          className="absolute top-0 left-0 w-full -z-10 h-full object-cover"
          alt=""
        />
      </section>

      <section className="h-[90vh]"></section>
      <section className="h-[90vh]"></section>
      <section className="h-[90vh]"></section>
    </main>
  )
}

export default ourwork
