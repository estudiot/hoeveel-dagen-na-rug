import flexibles from '../flexibles'
import seo from '../helpers/seo'

export default {
  label: 'Pages',
  name: 'pages',
  create: true,
  folder: 'content/pages',
  editor: {
    preview: false,
  },
  summary: '{{fields.title}}',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: true,
    },
    {
      label: 'URL',
      name: 'url',
      widget: 'string',
      required: true,
      default: '/',
      hint: 'Begin met een /',
    },
    {
      label: 'Template',
      name: 'template',
      widget: 'select',
      options: ['default'],
      default: ['default'],
    },
    {
      label: 'Section',
      name: 'sections',
      widget: 'list',
      types: flexibles,
    },
    seo,
  ],
}
