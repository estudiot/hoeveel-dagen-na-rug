import Link from 'next/link'

import type SkipLinkInterface from './interface'

import styles from './styles.module.scss'

export default function SkipLink({
  id = 'content',
  label = 'Ga naar de content',
}: SkipLinkInterface) {
  return (
    <Link href={`#${id}`}>
      <a className={styles['skip-link']} id="skip-link">
        {label}
      </a>
    </Link>
  )
}
