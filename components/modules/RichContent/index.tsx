import ReactMarkdown from 'react-markdown'

import type RichContentInterface from './interface'

import styles from './styles.module.scss'

export default function RichContent({ children }: RichContentInterface) {
  return (
    <div className={styles['rich-content']}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  )
}
