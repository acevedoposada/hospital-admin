import { PillRegular } from "@fluentui/react-icons"
import withTitle from "helpers/withTitle"

const Medicaments = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">Medicaments</h1>
    </div>
  )
}

export default withTitle(Medicaments, 'Medicamentos', PillRegular)