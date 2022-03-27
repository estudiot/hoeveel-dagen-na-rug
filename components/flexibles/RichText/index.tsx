import type RichTextInterface from './interface'

import RichContent from '../../modules/RichContent'

import styles from './styles.module.scss'

export default function RichText({ title, text }: RichTextInterface) {
  return (
    <section className={styles['rich-text']}>
      {title && <h2 className={styles['title']}>{title}</h2>}

      <div className={styles['content']}>
        <RichContent>{text}</RichContent>
      </div>
    </section>
  )
}
