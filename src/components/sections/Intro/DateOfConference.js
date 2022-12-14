import { Plus } from 'lucide-react'
import './DateOfConference.scss'

const DateOfConference = () => {
  return (
    <div className="date-of-conference-wrapper d-flex flex-wrap mt-0 mt-sm-4">
      <div className="box date location my-2">
        <h3>13-17</h3>
        <p>Mar 2023</p>
      </div>
      <div className="box location my-2">
        <span>
          <i className="me-1">
            <Plus />
          </i>
          <p>Online</p>
        </span>
        <h3>Trier | Belval</h3>
        <p>Germany | Luxembourg</p>
      </div>
    </div>
  )
}

export default DateOfConference
