const assets = {
  name: 'assets',
  title: 'Assets',
  type: 'document',
  fields: [
    {
      name: 'assetvideo',
      title: 'assetvideo',
      type: 'array',
      options: {
        hotspot: true,
      },
      of: [
        {type: 'file'},
      ],
    },
    {
      name: 'footnotes',
      title: 'Footnotes',
      type: 'text',
    },
  ],
}

export default assets
