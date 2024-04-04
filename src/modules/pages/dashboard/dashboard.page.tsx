import { HomeRegular } from "@fluentui/react-icons"
import withTitle from "helpers/withTitle"

const Dashboard = () => {

  return (
    <div>
      <h1 className="font-bold text-3xl">Dashboard</h1>
    </div>
  )
}

export default withTitle(Dashboard, 'Inicio', HomeRegular)