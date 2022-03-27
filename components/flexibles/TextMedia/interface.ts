export default interface TextMedia {
  order: 'text-image' | 'image-text'
  text: string
  image: string
  imageAlt: string
  component: 'text-media'
  title?: string
}
