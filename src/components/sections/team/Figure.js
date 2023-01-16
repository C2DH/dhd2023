import './ImageGrid.scss'
import { Twitter, Link } from 'lucide-react'

export const SrcSetRegexp = new RegExp('srcset="([^"]+)"', 'i')

const Figure = ({ srcset = [], title = '', excerpt = '', link = '' }) => {
  if (!srcset.length) {
    return null
  }
  const linkTwitterValidation = link.includes('twitter')

  return (
    <figure>
      <img className="w-100" alt={title} srcSet={srcset[1]} />
      <figcaption className="figcaption">
        <h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
        <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        {link ? (
          <i>
            <a href={`${link}`} target="_blank" rel="noreferrer">
              {linkTwitterValidation === true ? <Twitter size={24} /> : <Link />}
            </a>
          </i>
        ) : null}
      </figcaption>
    </figure>
  )
}

export default Figure
