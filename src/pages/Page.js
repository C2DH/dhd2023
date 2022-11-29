// import { useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import StaticPageLoader from '../components/StaticPageLoader'
import { Scrollama, Step } from 'react-scrollama'
import PageContent from './PageContent'
import React, { useState } from 'react'

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
  const [currentStepIndex, setCurrentStepIndex] = useState(null)

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepProgress = (step) => {
    setCurrentStepIndex(step)
  }

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
