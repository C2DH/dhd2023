import { useLocation } from 'react-router-dom'

const Page = ({}) => {
  const location = useLocation()

  console.debug('[Page]', location.pathname)

  return (
    <div
      className='Page position-absolute'
      style={{ marginTop: 200, opacity: location.pathname === '/cfp' ? 1 : 0 }}
    >
      <h1>Call for papers</h1>
    </div>
  )
}

export default Page
