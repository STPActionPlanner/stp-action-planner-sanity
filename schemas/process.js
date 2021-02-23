export default {
  title: 'Process',
  name: 'process',
  type: 'object',
  fields: [
    {name: 'title', type: 'string', title: 'Step'},
    {name: 'additionalInfo', type: 'array', title: 'Additional Step Information', of: [{type: 'string'}]},
  ]
};