import { createContext } from 'react'

import type Store from '../interfaces/Store'

export default function contextFactory<DataType>() {
  return createContext<Store<DataType>>({
    byId: {},
    allIds: [],
  })
}
