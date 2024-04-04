import { Menu, MenuTrigger, MenuItem, MenuPopover, MenuList, PresenceBadge, PresenceBadgeStatus } from "@fluentui/react-components"
import { States, statesTitles } from "constants/status"

interface StateSubMenuProps {
  currentStatus?: PresenceBadgeStatus
  onChange: (stateValue: PresenceBadgeStatus) => void;
}

const StateSubMenu = ({ onChange }: StateSubMenuProps) => {
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuItem>Estado</MenuItem>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {Object.keys(States).map((state) => (
            <MenuItem
              key={state}
              icon={<PresenceBadge status={state as PresenceBadgeStatus} />}
              onClick={() => onChange(state as PresenceBadgeStatus)}
            >
              {statesTitles[state as keyof typeof States]}
            </MenuItem>
          ))}
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export default StateSubMenu