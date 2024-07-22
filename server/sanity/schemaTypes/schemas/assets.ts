const assets = {
  name: 'media-document',
  title: 'Media document',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'videos',
      title: 'videos',
      type: 'array',
      options: {
        hotspot: true,
      },
      of: [{type: 'file'}],
    },
    {
      name: 'videodata',
      title: 'video-data',
      type: 'array',
      options: {
        hotspot: true,
      },
      of: [{type: 'file'}],
    },
  ],
}

export default assets
