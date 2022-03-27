import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ReactGA from 'react-ga'

import type WithGaInterface from './interface'

export default function WithGa({ children, pageProps }: WithGaInterface) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ReactGA.pageview(url)
    }

    // Initialize GA.
    ReactGA.initialize('G-SV641FJ9J4')
    ReactGA.set({ anonymizeIp: true })

    // Send Pageview for initial view.
    const customUrl = window.location.pathname + window.location.search
    handleRouteChange(customUrl)

    // Subscribe to router changes.
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return <>{children}</>
}
