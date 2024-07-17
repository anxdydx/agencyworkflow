import {
  Inter,
  Poppins,
  Sansita,
  Lexend_Deca,
  Lexend_Giga,
  Raleway,
  Quicksand,
  Manrope,
} from 'next/font/google'

const manrope = Manrope({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const quicksand = Quicksand({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-quicksand',
})

const raleway = Raleway({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-raleway',
})

const inter = Inter({
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const sansita = Sansita({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-sansita',
})

const lexendDeca = Lexend_Deca({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lexend-deca',
})

export {inter, poppins, sansita, lexendDeca, raleway, quicksand, manrope}
