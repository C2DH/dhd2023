/** node module that go through all the components code and collects all calls to useQuery */
const fs = require('fs')
const path = require('path')
const config = require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const axios = require('axios')
const crypto = require('crypto')

const ListOfApiCalls = [
  { url: process.env.REACT_APP_PAGES_CFP_URL },
  { url: process.env.REACT_APP_PAGES_GUIDELINES_URL },
  { url: process.env.REACT_APP_PAGES_KOMITEEANDTEAM_URL },
  { url: process.env.REACT_APP_PAGES_ZEITSCHIENE_URL },
  { url: process.env.REACT_APP_PAGES_ABOUT_URL },
  { url: process.env.REACT_APP_PAGES_IMPRESSUM_URL },
  { url: process.env.REACT_APP_PAGES_DATENSCHUTZ_URL },
  { url: process.env.REACT_APP_PAGES_TEAM_URL },
  { url: process.env.REACT_APP_PAGES_CONFHIGLIGHTS_URL },
  { url: process.env.REACT_APP_PAGES_KEYNOTE_URL },
  { url: process.env.REACT_APP_POSTS_PODCAST_TEAM_URL },
  { url: process.env.REACT_APP_PAGES_LOCATION_URL },
  { url: process.env.REACT_APP_PAGES_PROGRAMMBERSICH_URL },
  { url: process.env.REACT_APP_PAGES_FAQ_URL },
  { url: process.env.REACT_APP_PAGES_PODCAST_URL },
  { url: process.env.REACT_APP_REGISTER_URL },
  // KomiteeAndTeam people
  { url: '/posts?categories=13&per_page=50' },
  { url: '/posts?categories=14&per_page=50' },
]

// create axios instance with basename
const axiosInstance = axios.create({
  baseURL: path.join(process.env.REACT_APP_PROXY, process.env.REACT_APP_API_ROOT),
})

const f = async () => {
  // perform the calls and save them in cache folder.
  for await (const apiCall of ListOfApiCalls) {
    console.log('url', apiCall.url)
    const { data, request } = await axiosInstance.get(apiCall.url)
    // get pathname from axios request
    const hash = crypto.createHash('md5').update(request.path).digest('hex')

    console.log('request', hash)
    const contents = JSON.stringify(data)

    // looking for images
    const src = contents.match(/src="([^"]*)"/g)
    const srcset = contents.match(/srcset="([^"]*)"/g)
    console.log(src)
    fs.writeFileSync(path.resolve(__dirname, `../public/api/${hash}.json`), JSON.stringify(data))
    //.pathname)
    // console.log('request', request)
    // calculate md5 signature of the request url and params using crypto
    // const hash = crypto.createHash('md5').update(request.pathname).digest('hex')
    // console.log('hash', hash)

    // await axiosInstance.get(apiCall.url).then(({ data }) => {
    //   const fileName = apiCall.url.split('/').pop()
    //   fs.writeFileSync(path.resolve(__dirname, `../public/api/${fileName}.json`), JSON.stringify(data))
    // })
  }
}

f()
