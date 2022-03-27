import type HamburgerInterface from './interface'

import styles from './styles.module.scss'

export default function Hamburger({ isCross }: HamburgerInterface) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      className={styles['hamburger']}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      data-is-cross={isCross}
    >
      <polygon
        className={styles['hamburger__top']}
        id="Icon"
        fill="currentColor"
        points="4 7 20 7 20 5 4 5"
      />
      <polygon
        className={styles['hamburger__center']}
        id="Icon"
        fill="currentColor"
        points="4 13 20 13 20 11 4 11"
      />
      <polygon
        className={styles['hamburger__bottom']}
        id="Icon"
        fill="currentColor"
        points="4 19 20 19 20 17 4 17"
      />
    </svg>
  )
}
