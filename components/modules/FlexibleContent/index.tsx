import type FlexibleContentInterface from './interface'

import LargeText from '../../flexibles/LargeText'
import TextMedia from '../../flexibles/TextMedia'
import RichText from '../../flexibles/RichText'

export default function FlexibleContent({
  sections,
}: FlexibleContentInterface) {
  return (
    <>
      {sections.map((section, index) => {
        if (section.component === 'large-text') {
          return <LargeText key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'text-media') {
          return <TextMedia key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'rich-text') {
          return <RichText key={`flexible-content-${index}`} {...section} />
        }

        return null
      })}
    </>
  )
}
