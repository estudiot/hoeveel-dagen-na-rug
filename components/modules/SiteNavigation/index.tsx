import Link from 'next/link'
import { useEffect, useState } from 'react'

import type SiteNavigationInterface from './interface'
import type Navigation from '../../../interfaces/Navigation'

import { attributes } from '../../../content/globals/navigation.md'

import styles from './styles.module.scss'

// import Cross from '../../../public/icons/cross.svg'
// import Hamburger from '../../../public/icons/hamburger.svg'

export default function SiteNavigation({
  mobileMenuIsOpen,
}: SiteNavigationInterface) {
  const { items }: Navigation = attributes
  const [isHovering, setIsHovering] = useState(false)
  const [pathName, setPathName] = useState('')

  useEffect(() => {
    setPathName(window.location.pathname)
  }, [])

  return (
    <nav
      role="navigation"
      className={styles['site-navigation']}
      data-menu-is-open={mobileMenuIsOpen}
      data-is-hovering={isHovering}
    >
      <ul className={styles['site-navigation__list']}>
        {items.map(({ label, pageLink }) => (
          <li
            key={`navigation-item-${pageLink}`}
            className={styles['site-navigation__item']}
          >
            <Link href={pageLink}>
              <a
                tabIndex={mobileMenuIsOpen ? 0 : -1}
                className={styles['site-navigation__link']}
                data-active={pathName.includes(pageLink)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
