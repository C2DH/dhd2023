import ClosingKeynote from './ClosingKeynote.js'
import OpeningKeynote from './OpeningKeynote.js'

const Keynotes = ({ data }) => {
  return (
    <section>
      <OpeningKeynote data={data} />
      <ClosingKeynote data={data} />
    </section>
  )
}

export default Keynotes
