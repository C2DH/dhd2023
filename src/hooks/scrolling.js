import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export const useScrollToHash = ({ status }) => {
  const { hash } = useLocation()

  useEffect(() => {
    if (status === 'success' && typeof hash === 'string' && hash.indexOf('#') === 0) {
      // console.debug('[GuidelinesSection] @useEffect location.hash:', hash, status)
      const el = document.getElementById(hash.substring(1))
      if (el) {
        el.scrollIntoView()
      }
    }
  }, [hash, status])
}
