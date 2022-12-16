import './Loading.scss'
import ArchOutline from '../components/svg/ArchOutline'

const Loading = ({ height = 100, width = 100 }) => {
  return (
    <div className="Loading" style={{ minHeight: height, minWidth: width }}>
      <div className="arch-animated-pic">
        <div className="ArchOutline-wrapper one">
          <ArchOutline />
        </div>
        <div className="ArchOutline-wrapper two">
          <ArchOutline />
        </div>
        <div className="ArchOutline-wrapper three">
          <ArchOutline />
        </div>
        <div className="ArchOutline-wrapper four">
          <ArchOutline />
        </div>
        <div className="ArchOutline-wrapper five">
          <ArchOutline />
        </div>
        <div className="ArchOutline-wrapper six">
          <ArchOutline />
        </div>
        <div className="ArchOutline-wrapper seven">
          <ArchOutline />
        </div>
      </div>
      <p className="mt-2">LOADING</p>
    </div>
  )
}

export default Loading
