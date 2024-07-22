import type {NextApiRequest, NextApiResponse} from 'next'
import {createClient} from 'next-sanity'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2022-11-16',
    useCdn: true,
  })
  const query = `*[_type == "media-document"]`
  const homeData = await client.fetch(query)
  res.status(200).json({
    response: homeData,
  })
}
