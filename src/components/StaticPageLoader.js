import React, { useEffect } from 'react'
import ErrorViewer from './ErrorViewer'
import { useSpring, a, config } from '@react-spring/web'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: '',
  timeout: 15000,
  contentType: 'application/json',
})

const StaticPageLoader = ({ url, delay = 0, Component, fakeData, raw = false, ...rest }) => {
  const [animatedLine, apiAnimatedLine] = useSpring(() => ({
    width: 0,
    opacity: 1,
    config: config.slow,
  }))

  const { data, error, status } = useQuery([url], () => {
    return axiosInstance.get(url).then(({ data }) => data)
  })
  // const { data, error, status } = useGetJSON({
  //   url,
  //   delay,
  //   raw,
  //   onDownloadProgress: (e) => {
  //     console.debug('[StaticPageLoader] onDownloadProgress url', url, e.total, e.loaded)
  //     if (!e.total && e.loaded > 0) {
  //       apiAnimatedLine.start({ width: Math.min(100, (100 * e.loaded) / 23810103) })
  //     } else if (e.total && e.loaded) {
  //       if (e.loaded < e.total) {
  //         apiAnimatedLine.start({ width: (100 * e.loaded) / e.total })
  //       }
  //     }
  //   },
  // })

  useEffect(() => {
    if (status === 'loading') {
      apiAnimatedLine.start({
        width: 10,
        opacity: 1,
      })
    } else if (status === 'success') {
      apiAnimatedLine.start({
        width: 100,
        opacity: 0,
      })
    } else if (status === 'error') {
      apiAnimatedLine.start({
        width: 0,
        opacity: 0,
      })
    }
  }, [status])
  console.debug('[StaticPageLoader] status:', status, url)
  return (
    <>
      <div
        className="position-fixed w-100"
        style={{
          top: 0,
          left: 0,
          zIndex: 10,
        }}
      >
        <a.div
          className="NotebookViewer_loading position-absolute"
          style={{
            opacity: animatedLine.opacity,
            width: animatedLine.width.to((x) => `${x}%`),
          }}
        />
        <a.span
          className="NotebookViewer_loadingPercentage monospace"
          style={{
            opacity: animatedLine.opacity,
          }}
        >
          {animatedLine.width.to((x) => `${Math.round(x * 10000) / 10000}%`)}
        </a.span>
      </div>

      {status === 'error' && <ErrorViewer error={error} errorCode={error.code} />}
      {status !== 'error' && (
        <Component
          status={status}
          url={url}
          data={status === 'success' ? data : fakeData}
          isFake={status !== 'success'}
          {...rest}
        />
      )}
    </>
  )
}
export default StaticPageLoader
