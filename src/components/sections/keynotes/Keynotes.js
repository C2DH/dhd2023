import ClosingKeynote from './ClosingKeynote.js'
import OpeningKeynote from './OpeningKeynote.js'

const Keynotes = ({ data }) => {
  return (
    <section className="mt-30">
      <OpeningKeynote data={data} />
      <div className="mt-15">
        <ClosingKeynote data={data} />
      </div>
    </section>
  )
}

export default Keynotes
