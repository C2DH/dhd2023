import { useLocation } from 'react-router-dom'
import StaticPageLoader from '../components/StaticPageLoader'

const PageContent = ({ data }) => {
  if (!data) {
    return null
  }
  const title = data.data.title?.rendered
  const content = data.data.content?.rendered
  return (
    <div>
      <h1>{title}</h1>
      <section dangerouslySetInnerHTML={{ __html: content }}></section>
    </div>
  )
}

const Page = ({}) => {
  const location = useLocation()

  console.debug('[Page]', location.pathname)

  return (
    <div
      className="Page position-absolute"
      style={{ marginTop: 200, opacity: location.pathname === '/cfp' ? 1 : 0 }}
    >
      {location.pathname === '/cfp' && (
        <StaticPageLoader
          url={[process.env.REACT_APP_API_ROOT, process.env.REACT_APP_PAGES_CFP_URL].join('')}
          Component={PageContent}
        />
      )}
    </div>
  )
}

export default Page
