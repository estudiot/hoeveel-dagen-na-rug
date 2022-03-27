import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export default function getItemSlugs(directory: string) {
  return fs.readdirSync(directory)
}

export const getItemBySlug =
  (directory: string) =>
  (item: string, fields = []) => {
    const realSlug = item.replace(/\.md$/, '')
    const fullPath = join(directory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return data
  }

export function getAllItems(directory: string, fields = []) {
  const items = getItemSlugs(directory)

  return (
    items
      .map(item => getItemBySlug(directory)(item, fields))
      // sort posts by date in descending order
      .sort((post1: any, post2: any) => (post1.date > post2.date ? -1 : 1))
  )
}
