import { NextSeo } from 'next-seo'
import type SeoInterface from '../../../interfaces/Seo'

export default function Seo({ pageTitle, pageDescription }: SeoInterface) {
  return <NextSeo title={pageTitle} description={pageDescription} />
}
