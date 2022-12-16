export function getApiUrl(partialUrl) {
  return [process.env.REACT_APP_API_ROOT, partialUrl].join('')
}
