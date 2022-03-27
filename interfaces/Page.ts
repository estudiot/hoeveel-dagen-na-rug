import Seo from './Seo'

export default interface Page {
  title: string
  url: string
  template: string
  sections: any[]
  seo: Seo
}
