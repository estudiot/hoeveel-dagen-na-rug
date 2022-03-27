import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

import type TextInterface from './interface'

import styles from './styles.module.scss'

export default function Text({ text, linkLabel, linkUrl }: TextInterface) {
  return (
    <div className={styles['large-text']}>
      <div className={styles['content']}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>

      {linkUrl && linkLabel && (
        <Link href={linkUrl}>
          <a className={styles['link']}>{linkLabel}</a>
        </Link>
      )}
    </div>
  )
}
