export default {
  title: 'Result',
  name: 'result',
  type: 'object',
  fields: [
    {name: 'title', type: 'string', title: 'Result'},
    {name: 'additionalInfo', type: 'array', title: 'Additional Information', of: [{type: 'string'}]},
  ]
}