import type Example from '../../interfaces/Example'
import type { ExampleStore } from './interface'

import createStore from '../create-store'
import contextFactory from '../context-factory'

let exampleInstance: ExampleStore | null = null

export default function createExampleStore() {
  if (!exampleInstance) {
    exampleInstance = createStore('content/examples', 'title')
  }

  return exampleInstance
}

export const ExampleContext = contextFactory<Example>()
