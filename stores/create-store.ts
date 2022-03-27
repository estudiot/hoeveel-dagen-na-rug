import { join } from 'path'

import { getAllItems } from '../utils/content/getItemSlugs'
import fixDateFormat from '../utils/content/fixDateFormat'
import normalize from '../utils/content/normalize'

export default function createStore(path: string, id: string) {
  const directory = join(process.cwd(), path)
  const items = getAllItems(directory).map(fixDateFormat)

  return normalize(id)(items)
}
