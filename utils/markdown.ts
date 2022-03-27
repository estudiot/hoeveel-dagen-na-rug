import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

// All code from: https://raw.githubusercontent.com/james-wallis/wallisconsultancy/master/lib/markdown.js

/**
 * _pages and _pages/dynamic directory where the markdown content will live
 * _pages will have the home.md (aka index or /)
 * _pages/dynamic will be home to all other pages (aka [slug].js)
 */
const pagesDirectory = join(process.cwd(), 'content')
const dynamicPagesDirectory = join(pagesDirectory, 'pages')

/**
 * Gets all the files (slugs) in a directory
 */
export function getSlugsFromDirectory(dir: string) {
  return fs.readdirSync(dir)
}

/**
 * Gets the contents of a file
 * The gray-matter (metadata at the top of the file) will be
 * added to the item object, the content will be in
 * item.content and the file name (slug) will be in item.slug.
 */
export function getBySlug(dir: string, slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(dir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return data
}

/**
 * Returns contents of a page in the _pages directory
 */
export function getPageContentBySlug(slug: string) {
  return getBySlug(pagesDirectory, slug)
}

/**
 * Returns contents of a page in the _pages/dynamic directory
 */
export function getDynamicPageContentBySlug(slug: string) {
  return getBySlug(dynamicPagesDirectory, slug)
}

/**
 * Returns a list of all the pages in the _pages/dynamic directory
 */
export function getAllDynamicPages() {
  const slugs = getSlugsFromDirectory(dynamicPagesDirectory)
  const pages = slugs.map(slug => getDynamicPageContentBySlug(slug))
  return pages
}
