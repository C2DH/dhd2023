import './App.css'
import Home from './pages/Home'
import MenuFullScreen from './components/menu/MenuFullScreen'
import { useCurrentWindowDimensions } from './hooks/viewport'
import Header from './components/Header'
import Page from './pages/Page'
import Background from './components/Background'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
      keepPreviousData: true,
    },
  },
})

function App({ isMobile }) {
  const { width, height } = useCurrentWindowDimensions(isMobile)
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Background></Background>
        <main>
          <MenuFullScreen availableWidth={width} availableHeight={height} />
          <Header></Header>
          <Page></Page>

          <Home hideWhenPathIs={['/cfp']} availableWidth={width} availableHeight={height}></Home>
        </main>
      </QueryClientProvider>
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
