// import type { GetStaticProps } from 'next'

import { attributes } from '../content/pages/home.md'
import { ExampleStore } from '../stores/example/interface'
// import createExampleStore, { ExampleContext } from '../stores/example/store'

import DefaultTemplate from '../templates/Default'

interface HomeInterface {
  exampleStore: ExampleStore
}

export default function Home({ exampleStore }: HomeInterface) {
  return (
    <>
      {/* <ExampleContext.Provider value={exampleStore}> */}
      <DefaultTemplate {...attributes} />
      {/* </ExampleContext.Provider> */}
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const exampleStore = await createExampleStore()

//   return {
//     props: {
//       exampleStore,
//     },
//   }
// }
