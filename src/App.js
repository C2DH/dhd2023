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
import {
  CfpRoute,
  KomiteeAndTeamRoute,
  ZeitschieneRoute,
  AboutRoute,
  KeynoteRoute,
  ImpressumRoute,
  LocationRoute,
  ProgrammubersichtRoute,
  FaqRoute,
  RegisterRoute,
  RaDiHum20Route,
} from './constants'
import ScrollToTop from './components/ScrollToTop'
import { isMobile } from 'react-device-detect'
import AnimatedCursor from 'react-animated-cursor'

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
  const { width, height } = useCurrentWindowDimensions(isMobile, 'app')
  return (
    <div className="App">
      {/* <React.Suspense> */}
      {!isMobile ? (
        <AnimatedCursor
          color="#fff"
          // innerSize={8}
          outerSize={35}
          // innerScale={1.5}
          outerScale={1.5}
          hasBlendMode={true}
          outerAlpha={0}
          outerStyle={{
            backgroundColor: 'var(--primary)',
            mixBlendMode: 'screen',
          }}
          innerStyle={{
            diplay: 'none',
          }}
        />
      ) : null}
      <QueryClientProvider client={queryClient}>
        <Background
          availableWidth={width}
          availableHeight={isMobile ? height * 1.15 : height}
        ></Background>
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
              path="/page/register"
              element={
                <React.Suspense>
                  <Page height={height} url={RegisterRoute.contentUrl} />
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <React.Suspense>
                  <Home availableWidth={width} availableHeight={height}></Home>
                </React.Suspense>
              }
            />
            <Route
              path="/page/radihum20"
              element={
                <React.Suspense>
                  <Page height={height} url={RaDiHum20Route.contentUrl} />
                </React.Suspense>
              }
            />
          </Routes>
        </main>
        <ThreeJsBgArch availableWidth={width} availableHeight={isMobile ? height * 1.1 : height} />
        <Footer />
        <ScrollToTop />
      </QueryClientProvider>
      {/* </React.Suspense> */}
    </div>
  )
}

export default App
