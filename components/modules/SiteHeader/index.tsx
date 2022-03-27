import Link from 'next/link'
import HeadRoom from 'react-headroom'
import { useState, useRef, useEffect } from 'react'

import SiteNavigation from '../SiteNavigation'
import SkipLink from '../../partials/SkipLink'
import Hamburger from '../../partials/Hamburger'

import styles from './styles.module.scss'

export default function SiteHeader() {
  const headerRef = useRef<HTMLHeadElement>(null)

  const [headerHeight, setHeaderHeight] = useState(0)
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(true)

  useEffect(() => {
    setMobileNavIsOpen(false)

    const onResize = () => {
      // // Always open nav on larger screens. This also impacts aria-hidden statements.
      // setMobileNavIsOpen(window.innerWidth > breakpointMedium);

      // Set the top of the nav wrapper to the height of the header.
      if (headerRef.current) {
        const { height } = headerRef.current.getBoundingClientRect()
        setHeaderHeight(Math.round(height - 1))
      }
    }

    onResize()
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  /**
   * Close pop-outs when the nav unpins
   */
  // const handleUnpin = () => {
  //   // Only close the mobile nav when the mobile nav is visible.
  //   if (window.innerWidth < 960) {
  //     setMobileNavIsOpen(false)
  //   }
  //   setSearchIsOpen(false)
  // }

  return (
    <>
      <SkipLink />

      <HeadRoom
        style={{ zIndex: 999 }}
        // onUnpin={handleUnpin}
      >
        <header ref={headerRef} className={styles['site-header']}>
          <Link href="/">
            <a className={styles['site-header__logo']}>Logo</a>
          </Link>

          <button
            type="button"
            className={styles['site-header__nav-toggle']}
            onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}
            aria-haspopup="true"
            aria-expanded={mobileNavIsOpen}
            aria-controls="navigation-container"
          >
            <span className="sr-only">
              {mobileNavIsOpen ? 'Sluit navigatie' : 'Open navigatie'}
            </span>
            <Hamburger isCross={mobileNavIsOpen} />
          </button>

          <div
            id="navigation-container"
            className={`${styles['site-header__pop-out']} ${styles['site-header__pop-out--reset-on-large-screens']}`}
            aria-hidden={!mobileNavIsOpen}
            data-is-open={mobileNavIsOpen}
            style={{ top: `${headerHeight}px` }}
          >
            <SiteNavigation mobileMenuIsOpen={mobileNavIsOpen} />
          </div>
        </header>
      </HeadRoom>
    </>
  )
}
