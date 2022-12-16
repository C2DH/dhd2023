import './ImageGrid.scss'

export const SrcSetRegexp = new RegExp('srcset="([^"]+)"', 'i')

const Figure = ({ srcset = [], title = '', excerpt = '' }) => {
  if (!srcset.length) {
    return null
  }
  return (
    <figure>
      <img className="w-100" alt={title} srcSet={srcset[1]} />
      <figcaption className="figcaption">
        <h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
        <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
      </figcaption>
    </figure>
  )
}

export default Figure
