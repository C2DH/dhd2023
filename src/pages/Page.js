import { useLayoutEffect } from 'react'
import StaticPageLoader from '../components/StaticPageLoader'
import PageContent from './PageContent'

const Page = ({ url, ref }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="Page" ref={ref}>
      <StaticPageLoader url={url} Component={PageContent} />
    </div>
  )
}
export default Page
