import './App.css'
import { Route, Routes } from 'react-router-dom'
import MenuFullScreen from './components/menu/MenuFullScreen'
import { useCurrentWindowDimensions } from './hooks/viewport'
import Header from './components/menu/Header'
import Background from './components/Background'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Footer from './components/sections/footer/Footer'
import ThreeJsBgArch from './components/ThreeJsBgArch'
import React from 'react'
import { CfpRoute } from './constants'
import {
  KomiteeAndTeamRoute,
  ZeitschieneRoute,
  AboutRoute,
  KeynoteRoute,
  ImpressumRoute,
  LocationRoute,
  ProgrammubersichtRoute,
  FaqRoute,
} from './constants'
import ScrollToTop from './components/ScrollToTop'
import { isMobile } from 'react-device-detect'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnMount: false,
      staleTime: Infinity,
      retry: false,
      suspense: false,
      keepPreviousData: false,
    },
  },
})

const Page = React.lazy(() => import('./pages/Page'))
const Home = React.lazy(() => import('./pages/Home'))

function App() {
  // console.log('useQuery', useQuery.status)

  // const { status } = useQuery(() => {
  //   if (status === 'loading') {
  //     return <Loading />
  //   } else if (status === 'success') {
  //     return null
  //   }
  // })

  const { width, height } = useCurrentWindowDimensions(isMobile)
  return (
    <div className="App">
      {/* <React.Suspense> */}
      <QueryClientProvider client={queryClient}>
        <Background></Background>
        <main style={{ minHeight: height * 1.5 }}>
          <Header></Header>
          <MenuFullScreen availableWidth={width} availableHeight={height} />
          <Routes>
            <Route
              path="/page/about"
              element={
                <React.Suspense>
                  <Page url={AboutRoute.contentUrl} height={height} />
                </React.Suspense>
              }
            />
            <Route
              path="/page/cfp"
              element={
                <React.Suspense>
                  <Page url={CfpRoute.contentUrl} height={height} />
                </React.Suspense>
              }
            />
            <Route
              path="/page/komitee_and_team"
              element={
                <React.Suspense>
                  <Page url={KomiteeAndTeamRoute.contentUrl} height={height} />
                </React.Suspense>
              }
            />
            <Route
              path="/page/zeitschiene"
              element={
                <React.Suspense>
                  <Page height={height} url={ZeitschieneRoute.contentUrl} />
                </React.Suspense>
              }
            />
            <Route
              path="/page/keynotes"
              element={
                <React.Suspense>
                  <Page height={height} url={KeynoteRoute.contentUrl} />
                </React.Suspense>
              }
            />
            <Route
              path="/page/impressum"
              element={
                <React.Suspense>
                  <Page height={height} url={ImpressumRoute.contentUrl} />
                </React.Suspense>
              }
            />
            <Route
              path="/page/location"
              element={
                <React.Suspense>
                  <Page height={height} url={LocationRoute.contentUrl} />
                </React.Suspense>
              }
            />
            <Route
              path="/page/programmubersich"
              element={
                <React.Suspense>
                  <Page height={height} url={ProgrammubersichtRoute.contentUrl} />
                </React.Suspense>
              }
            />
            <Route
              path="/page/faq"
              element={
                <React.Suspense>
                  <Page height={height} url={FaqRoute.contentUrl} />
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <React.Suspense fallback={'loading....'}>
                  <Home availableWidth={width} availableHeight={height}></Home>
                </React.Suspense>
              }
            />
          </Routes>
        </main>
        <ThreeJsBgArch availableWidth={width} availableHeight={height} />
        <Footer />
        <ScrollToTop />
      </QueryClientProvider>
      {/* </React.Suspense> */}
    </div>
  )
}

console.info(
  'version',
  process.env.REACT_APP_GIT_TAG,
  process.env.REACT_APP_GIT_BRANCH,
  `\nhttps://github.com/C2DH/dhd2023/commit/${process.env.REACT_APP_GIT_REVISION}`,
  '\n -page CFP:',
  process.env.REACT_APP_PAGES_CFP_URL,
)

export default App
