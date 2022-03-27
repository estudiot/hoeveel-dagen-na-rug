export default {
  label: 'SEO',
  name: 'seo',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      label: 'Pagina titel',
      name: 'pageTitle',
      widget: 'string',
      required: true,
    },
    {
      label: 'Pagina beschrijving',
      name: 'pageDescription',
      widget: 'text',
      required: true,
    },
    {
      label: 'Afbeelding die je ziet als je een pagina deelt op Social Media',
      name: 'ogImage',
      widget: 'image',
    },
  ],
}
