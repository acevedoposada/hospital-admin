import { CalendarRtlRegular } from "@fluentui/react-icons"
import withTitle from "helpers/withTitle"

const Appointments = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Appointments</h1>
    </div>
  )
}

export default withTitle(Appointments, 'Citas Médicas', CalendarRtlRegular)