import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Text media',
  name: 'text-media',
  widget: 'object',
  summary: 'Text media | {{fields.title}}',
  fields: [
    {
      label: 'Visual order',
      name: 'order',
      widget: 'select',
      options: ['text-image', 'image-text'],
      default: ['image-text'],
      required: true,
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false,
    },
    {
      label: 'Text',
      name: 'text',
      widget: 'markdown',
      required: true,
      buttons: ['heading-three', 'bold', 'italic', 'link'],
      editor_components: [],
      modes: ['rich_text'],
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      required: true,
    },
    {
      label: 'Image description',
      name: 'imageAlt',
      widget: 'string',
      required: true,
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'text-media',
    },
  ],
}
