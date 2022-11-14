import './App.css'
import Home from './pages/Home'
import MenuFullScreen from './components/menu/MenuFullScreen'
import { useCurrentWindowDimensions } from './hooks/viewport'
import Header from './components/Header'
import Page from './pages/Page'
import Background from './components/Background'

function App({ isMobile }) {
  const { width, height } = useCurrentWindowDimensions(isMobile)
  return (
    <div className='App'>
      <Background></Background>
      <main>
        <MenuFullScreen availableWidth={width} availableHeight={height} />
        <Header></Header>
        <Page></Page>

        <Home
          hideWhenPathIs={['/cfp']}
          availableWidth={width}
          availableHeight={height}
        ></Home>
      </main>
    </div>
  )
}

console.info(
  'version',
  process.env.REACT_APP_GIT_TAG,
  process.env.REACT_APP_GIT_BRANCH,
  `\nhttps://github.com/C2DH/dhd2023/commit/${process.env.REACT_APP_GIT_REVISION}`,
  '\n -page CFP:',
  process.env.REACT_APP_PAGES_CFP_URL
)

export default App
