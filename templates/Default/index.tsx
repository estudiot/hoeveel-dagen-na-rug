import { useEffect, useMemo, useState } from 'react'

import type Page from '../../interfaces/Page'

import { useSpring, animated } from '@react-spring/web'

import Seo from '../../components/partials/Seo'

import styles from './styles.module.scss'
import displayDate from '../../utils/display-date'

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 1)
  const days = []
  while (date.getMonth() === month) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }
  return days
}

const getMonthName = (date: any) =>
  Intl.DateTimeFormat('nl-NL', { month: 'long' }).format(date)

export default function DefaultTemplate({ title, sections, seo }: Page) {
  const oneDay = 24 * 60 * 60 * 1000

  const dayOfTheBack = new Date('2022-03-19')
  const today = new Date()

  // @ts-ignore
  const diffDays = Math.floor(Math.abs((dayOfTheBack - today) / oneDay))

  const props = useSpring({
    from: { x: 0 },
    x: diffDays,
    delay: 30,
  })

  const makeMonths = useMemo(() => {
    const months = [
      getDaysInMonth(0, 2022),
      getDaysInMonth(1, 2022),
      getDaysInMonth(2, 2022),
      getDaysInMonth(3, 2022),
      getDaysInMonth(4, 2022),
      getDaysInMonth(5, 2022),
      getDaysInMonth(6, 2022),
      getDaysInMonth(7, 2022),
      getDaysInMonth(8, 2022),
      getDaysInMonth(9, 2022),
      getDaysInMonth(10, 2022),
      getDaysInMonth(11, 2022),
    ].map(month => {
      return month.map(date => {
        const daysAfterBack = Math.floor(
          // @ts-ignore
          ((dayOfTheBack - date) / oneDay) * -1 + 1
        )

        return {
          date,
          daysAfterBack,
        }
      })
    })

    return months
  }, [])

  return (
    <>
      <Seo
        pageTitle={`${diffDays} dagen na rug`}
        pageDescription="Hoeveel dagen na rug is het nu?"
      />

      <main>
        <div className={styles['default']}>
          <animated.h1 className={styles['number']}>
            {props.x.to(x => x.toFixed(0))}
          </animated.h1>

          <svg
            width="824"
            height="404"
            viewBox="0 0 824 404"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles['illustration']}
          >
            <mask id="path-1-inside-1_416_61" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M576.934 86.054H824V312.816H580.875C544.866 367.624 482.839 403.811 412.36 403.811C341.881 403.811 279.853 367.624 243.844 312.816H0V86.054H247.786C284.277 34.4957 344.388 0.837891 412.36 0.837891C480.331 0.837891 540.442 34.4957 576.934 86.054Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M576.934 86.054H824V312.816H580.875C544.866 367.624 482.839 403.811 412.36 403.811C341.881 403.811 279.853 367.624 243.844 312.816H0V86.054H247.786C284.277 34.4957 344.388 0.837891 412.36 0.837891C480.331 0.837891 540.442 34.4957 576.934 86.054Z"
              fill="#D72A35"
            />
            <path
              d="M576.934 86.054L566.323 93.5643L570.208 99.054H576.934V86.054ZM824 86.054H837V73.054H824V86.054ZM824 312.816V325.816H837V312.816H824ZM580.875 312.816V299.816H573.861L570.01 305.678L580.875 312.816ZM243.844 312.816L254.709 305.678L250.858 299.816H243.844V312.816ZM0 312.816H-13V325.816H0V312.816ZM0 86.054V73.054H-13V86.054H0ZM247.786 86.054V99.054H254.511L258.397 93.5643L247.786 86.054ZM576.934 99.054H824V73.054H576.934V99.054ZM811 86.054V312.816H837V86.054H811ZM824 299.816H580.875V325.816H824V299.816ZM570.01 305.678C536.303 356.982 478.278 390.811 412.36 390.811V416.811C487.399 416.811 553.429 378.265 591.74 319.955L570.01 305.678ZM412.36 390.811C346.441 390.811 288.417 356.982 254.709 305.678L232.979 319.955C271.29 378.265 337.32 416.811 412.36 416.811V390.811ZM243.844 299.816H0V325.816H243.844V299.816ZM13 312.816V86.054H-13V312.816H13ZM0 99.054H247.786V73.054H0V99.054ZM258.397 93.5643C292.556 45.3012 348.784 13.8379 412.36 13.8379V-12.1621C339.992 -12.1621 275.999 23.6902 237.174 78.5437L258.397 93.5643ZM412.36 13.8379C475.935 13.8379 532.163 45.3012 566.323 93.5643L587.545 78.5437C548.721 23.6901 484.727 -12.1621 412.36 -12.1621V13.8379Z"
              fill="white"
              mask="url(#path-1-inside-1_416_61)"
            />
          </svg>

          <span className={styles['text-left']}>dagen</span>
          <span className={styles['text-right']}>na rug</span>
        </div>

        <section className={styles['dates-section']}>
          <h2>Van Jezus naar Rug (2022)</h2>

          <div className={styles['dates']}>
            {makeMonths.map((month, index) => (
              <div key={`month-${index}`} className={styles['month']}>
                <h3 className={styles['month-label']}>
                  {getMonthName(month[0].date)}
                </h3>

                <div className={styles['date-grid']}>
                  {month.map(day => (
                    <div
                      key={`${day.date.toISOString()}`}
                      data-day={day.date.getDay()}
                      className={styles['day']}
                      data-date={day.date.toISOString()}
                    >
                      <span>{displayDate(day.date.toISOString())}</span>
                      <span className={styles['days-after-back']}>
                        {day.daysAfterBack}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
