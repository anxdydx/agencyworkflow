import axios from 'axios'
import {useRouter} from 'next/router'
import React from 'react'

const testimonials = (props: any) => {
  const router = useRouter()
  console.log(router.defaultLocale)
  return <div>testimonials {props.response}</div>
}

export default testimonials

export async function getServerSideProps() {
  const getCall = await axios.get('http://localhost:3000/api/sanity')
  console.log(getCall)
  return {
    props: {
      response: 2,
    },
  }
}
