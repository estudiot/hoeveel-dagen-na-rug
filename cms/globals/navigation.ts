export default {
  label: 'Navigation',
  name: 'navigation',
  file: 'content/globals/navigation.md',
  editor: {
    preview: false,
  },
  fields: [
    {
      label: 'Navigation items',
      name: 'items',
      widget: 'list',
      collapsed: false,
      fields: [
        {
          label: 'Label',
          name: 'label',
          widget: 'string',
        },
        {
          label: 'Page link',
          name: 'pageLink',
          widget: 'relation',
          collection: 'pages',
          search_fields: ['url'],
          value_field: 'url',
          display_fields: ['url'],
        },
      ],
    },
  ],
}
