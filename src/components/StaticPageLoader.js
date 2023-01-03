import React, { useEffect } from 'react'
import ErrorViewer from './ErrorViewer'
import { useSpring, a, config } from '@react-spring/web'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROXY : '',
  timeout: 15000,
  contentType: 'application/json',
})

const StaticPageLoader = ({
  url,
  options,
  delay = 0,
  Component,
  fakeData,
  raw = false,
  ...rest
}) => {
  const [animatedLine, apiAnimatedLine] = useSpring(() => ({
    width: 0,
    opacity: 1,
    config: config.slow,
  }))

  const { data, error, status } = useQuery([url], () => {
    return axiosInstance.get(url, options).then(({ data }) => data)
  })

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
  }, [apiAnimatedLine, status])
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
        ></a.span>
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
