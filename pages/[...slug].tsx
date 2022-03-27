import type { GetStaticPaths, GetStaticProps } from 'next'
import type Page from '../interfaces/Page'

import getSlugFromContext from '../utils/get-slug-from-context/index'
import { getAllDynamicPages, getPageContentBySlug } from '../utils/markdown'

import DefaultTemplate from '../templates/Default'

interface PageAttributes {
  pageData: Page
}

export default function Home({ pageData }: PageAttributes) {
  return (
    <>
      <DefaultTemplate {...pageData} />
    </>
  )
}

/**
 * Get data for a specific page and insert as props.
 */
export const getStaticProps: GetStaticProps = async context => {
  const slug = getSlugFromContext(context)
  const content = getPageContentBySlug(`/pages${slug}`)

  return {
    props: {
      pageData: content,
    },
  }
}

/**
 * Get all static paths for Next.js to generate URLs.
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const pages = getAllDynamicPages()

  return {
    paths: pages.map(page => page.url).filter(url => url !== '/'),
    fallback: false,
  }
}
