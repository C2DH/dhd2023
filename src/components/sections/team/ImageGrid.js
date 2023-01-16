import { Col, Row } from 'react-bootstrap'
import './ImageGrid.scss'
import { Twitter, Link } from 'lucide-react'

const SrcSetRegexp = new RegExp('srcset="([^"]+)"', 'i')

const Tags = {
  13: 'PROGRAMMKOMITEE',
  14: 'LOKALES_ORGANISATIONSKOMITEE',
}

const ImageGrid = ({ data }) => {
  if (!Array.isArray(data)) {
    return null
  }
  return (
    <Row className="ImageGrid">
      {Object.keys(Tags).map((k) => (
        <Row className="ImageGrid" key={k}>
          {}
        </Row>
      ))}
      {data.map((person) => {
        const content = String(person.content?.rendered)
        const srcset = content.match(SrcSetRegexp)
        const title = person.title?.rendered
        const link = person.acf?.social_link
        const linkTwitterValidation = link.includes('twitter')

        return (
          <Col
            xs={{ span: 12 }}
            sm={{ span: 6 }}
            md={{ span: 6 }}
            lg={{ span: 4 }}
            xxl={{ span: 3 }}
            key={person.id}
          >
            {srcset ? (
              <figure>
                <img className="w-100" alt={title} srcSet={srcset[1]} />
                <figcaption className="figcaption">
                  <h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
                  <div dangerouslySetInnerHTML={{ __html: person.excerpt?.rendered }}></div>
                  {link ? (
                    <i>
                      <a href={`${link}`} target="_blank" rel="noreferrer">
                        {linkTwitterValidation === true ? <Twitter size={24} /> : <Link />}
                      </a>
                    </i>
                  ) : null}
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
