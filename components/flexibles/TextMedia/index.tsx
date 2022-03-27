import ReactMarkdown from 'react-markdown'
import type ColumnTextInterface from './interface'

import styles from './styles.module.scss'

export default function ColumnText({
  order,
  title,
  text,
  image,
  imageAlt,
}: ColumnTextInterface) {
  return (
    <section className={styles['text-media']} data-order={order}>
      {title && <h2 className={styles['title']}>{title}</h2>}

      <div className={styles['text']}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>

      <figure className={styles['image-container']}>
        <img src={image} alt={imageAlt} className={styles['image']} />
      </figure>
    </section>
  )
}
