import { mergeClasses, tokens } from '@fluentui/react-components';
import { NavLink, useNavigate } from 'react-router-dom';
import _ from 'lodash';

import { navItems } from 'constants/nav-items';
import useStyles from './mobile-nav.styles';

const MobileNav = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      {_.map(navItems, ({ Icon, ActiveIcon, title, route }, idx) => (
        <NavLink
          key={idx}
          className={classes.button}
          to={route}
          onClick={() => navigate(`/${route}`)}
        >
          {({ isActive }) => {
            const CurrentIcon = isActive ? ActiveIcon : Icon;
            return (
              <>
                <CurrentIcon
                  fontSize={26}
                  color={
                    isActive ? tokens.colorCompoundBrandForeground1 : undefined
                  }
                />
                <p
                  className={mergeClasses(
                    'truncate',
                    classes['button-label'],
                    isActive && classes['active-button']
                  )}
                >
                  {title}
                </p>
              </>
            );
          }}
        </NavLink>
      ))}
    </div>
  );
};

export default MobileNav;
