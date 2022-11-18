import { useLocation } from 'react-router-dom'
import StaticPageLoader from '../components/StaticPageLoader'
import { StaticPageRoutePrefix, StaticPagesRoutes } from '../constants'

const PageContent = ({ data }) => {
  if (!data) {
    return null
  }
  const title = data.title?.rendered
  const content = data.content?.rendered
  return (
    <div>
      <h1>{title}</h1>
      <section dangerouslySetInnerHTML={{ __html: content }}></section>
    </div>
  )
}

const Page = ({}) => {
  const location = useLocation()
  const currentRoute = StaticPagesRoutes.find((d) => d.to === location.pathname)
  const isHidden = !currentRoute

  // const pageUrl = isHidden ? null : location.pathname.split(StaticPageRoutePrefix).join('')
  console.debug('[Page]', location.pathname, isHidden, currentRoute)

  return (
    <div className="Page" style={{ opacity: isHidden ? 0 : 1 }}>
      {!isHidden && <StaticPageLoader url={currentRoute.contentUrl} Component={PageContent} />}
    </div>
  )
}

export default Page
