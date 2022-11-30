// import { useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import StaticPageLoader from '../components/StaticPageLoader'
import PageContent from './PageContent'

// const Page = ({ className = '' }) => {
//   const location = useLocation()
//   const currentRoute = StaticPagesRoutes.find((d) => d.to === location.pathname)
//   const isHidden = !currentRoute

//   // const pageUrl = isHidden ? null : location.pathname.split(StaticPageRoutePrefix).join('')
//   console.debug('[Page]', location.pathname, isHidden, currentRoute)

//   return (
//     <>
//       <div
//         className={`Page ${className}`}
//         style={{ marginTop: location.pathname === '/' ? '0' : '0', opacity: isHidden ? 0 : 1 }}
//       >
//         {!isHidden && <StaticPageLoader url={currentRoute.contentUrl} Component={PageContent} />}
//       </div>
//     </>
//   )
// }

const Page = ({ url, ref }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    // <Scrollama progress onStepProgress={onStepProgress}>
    //   <Step data={1}>
    <div className="Page" ref={ref}>
      <StaticPageLoader url={url} Component={PageContent} />
    </div>
    //   {/* </Step>
    // </Scrollama> */}
  )
}
export default Page
