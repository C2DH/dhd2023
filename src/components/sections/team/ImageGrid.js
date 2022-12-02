import { Col, Row } from 'react-bootstrap'
import './ImageGrid.scss'

const SrcSetRegexp = new RegExp('srcset="([^"]+)"', 'i')

const Tags = {
  7: 'VIPS',
  8: 'SUPER VIPS',
}

const ImageGrid = ({ data }) => {
  if (!Array.isArray(data)) {
    return null
  }
  // const groups = data.reduce((acc, d) => {
  //   if (!d.tags.length) {
  //     acc.untagged = (acc.untagged ?? []).concat([d])
  //     return acc
  //   }
  //   const tag = Tags[d.tags[0]] ? Tags[d.tags[0]] : d.tags[0]
  //   acc[tag] = (acc[tag] ?? []).concat([d])
  //   return acc
  // }, {})

  console.debug('ImageGrid', data)

  // console.debug('[ImageGrid] groups', groups)
  return (
    <Row className="ImageGrid">
      {Object.keys(Tags).map((k) => (
        <Row key={k}>{}</Row>
      ))}
      {data.map((person) => {
        const content = String(person.content?.rendered)
        const srcset = content.match(SrcSetRegexp)
        const title = person.title?.rendered

        return (
          <Col md={{ span: 6 }} xl={{ span: 4 }} xxl={{ span: 3 }} key={person.id}>
            {srcset ? (
              <figure>
                <img className="w-100" alt={title} srcSet={srcset[1]} />
                <figcaption className="figcaption">
                  <h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
                  <div dangerouslySetInnerHTML={{ __html: person.excerpt?.rendered }}></div>
                </figcaption>
              </figure>
            ) : null}
          </Col>
        )
      })}
    </Row>
  )
}

export default ImageGrid
