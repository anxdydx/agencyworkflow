import {manrope} from '@/utils/fonts'
import {Avatar} from '@nextui-org/react'
import React from 'react'
import axios from 'axios'
import {createClient} from 'next-sanity'

const ourwork = (props: any) => {
  console.log(props.homeData[0].videos)
  return (
    <main className="ourwork-main-page">
      {props.homeData[0].videos.map((videoItems: any) => {
        return (
          <>
            <video src="" />
          </>
        )
      })}
    </main>
  )
}

export async function getServerSideProps() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2022-11-16',
    useCdn: true,
  })
  const query = `*[_type == "media-document"]`
  const homeData = await client.fetch(query).then((data) => {
    return data
  })
  return {
    props: {
      homeData,
    },
  }
}

export default ourwork
