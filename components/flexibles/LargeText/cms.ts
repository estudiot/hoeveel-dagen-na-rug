import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Large text',
  name: 'large-text',
  widget: 'object',
  summary: 'Large text | {{fields.title}}',
  fields: [
    {
      label: 'Text',
      name: 'text',
      widget: 'markdown',
      required: true,
      buttons: ['bold', 'italic', 'link'],
      editor_components: [],
      modes: ['rich_text'],
    },
    {
      label: 'Link-label',
      name: 'linkLabel',
      widget: 'string',
    },
    {
      label: 'Link-url',
      name: 'linkUrl',
      widget: 'string',
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'large-text',
    },
  ],
}
