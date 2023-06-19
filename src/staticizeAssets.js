// for each file in the public/api folder, get the content
// and replace the image urls with the new ones
//
const fs = require('fs')
const path = require('path')
const axios = require('axios')
const files = fs.readdirSync(path.resolve(__dirname, '../public/api'))
const config = require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

//  list all files
console.log(files)

const f = async function () {
  const imagesToDownload = []
  for (const file of files) {
    const filePath = path.resolve(__dirname, '../public/api', file)
    const content = fs.readFileSync(filePath, 'utf8')
    console.log('file', file)
    //
    const contentWithNewSrc = content.replace(/src=\\"([^"]+)\\"/g, (m, p1) => {
      console.log(' - src: ', p1)
      imagesToDownload.push(p1)
      const staticizedAssetUrl = p1.replace(process.env.REACT_APP_PROXY, '')
      return `src=\\"${staticizedAssetUrl}\\"`
    })

    const contentWithNewSrcAndSrcSet = contentWithNewSrc.replace(
      /srcset=\\"([^"]+)\\"/g,
      (m, p1) => {
        console.log(' - srcset: ', p1)
        const srcsetArray = p1.split(/\s[^,]+,\s/).map((src) => src.split(' ')[0])
        console.log('srcsetArray', srcsetArray)
        imagesToDownload.push(...srcsetArray)
        const staticizedAssetSrcset = p1.split(process.env.REACT_APP_PROXY).join('')
        // split the srcset into an array

        return `srcset=\\"${staticizedAssetSrcset}\\"`
      },
    )
    fs.writeFileSync(filePath, contentWithNewSrcAndSrcSet)
  }
  console.log(imagesToDownload)
  // use axios to download each image in the assets follder
  // and save it in the public folder
  for await (const image of imagesToDownload) {
    const imageFilePath = path.join(
      __dirname,
      '../public/',
      image.replace(process.env.REACT_APP_PROXY, ''),
    )
    // get directory of imageFiklepath
    const imageDirectory = path.dirname(imageFilePath)
    fs.mkdirSync(imageDirectory, { recursive: true })
    try {
      const { data } = await axios.get(image, { responseType: 'arraybuffer' })
      console.log('imageFilePath: ', imageFilePath)
      fs.writeFileSync(imageFilePath, data)
    } catch (e) {
      console.log('error', e.code, image)
    }
  }
}

f()
