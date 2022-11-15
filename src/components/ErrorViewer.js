const ErrorViewer = ({ error, errorCode }) => {
  return (
    <>
      <h2>Error</h2>
      <pre>Error {JSON.stringify(error, null, 2)}</pre>
    </>
  )
}

export default ErrorViewer
