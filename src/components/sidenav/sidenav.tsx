import { Tooltip, mergeClasses } from '@fluentui/react-components';
import { NavigationRegular } from '@fluentui/react-icons';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import _ from 'lodash';

import { NavItemType, navItems } from 'constants/nav-items';

import { useStyles } from './sidenav.styles';

const NavItem = ({
  ActiveIcon,
  Icon,
  title,
  isActive,
  expanded,
}: NavItemType & { isActive: boolean; expanded: boolean }) => {
  const classes = useStyles();
  const CurrentIcon = isActive ? ActiveIcon : Icon;

  const content = (
    <div
      className={mergeClasses(classes.link, isActive && classes['active-link'])}
    >
      <div className='flex items-center min-w-[18.8rem] w-[18.8rem]'>
        <div className='w-12 h-12 flex flex-col items-center justify-center'>
          <CurrentIcon fontSize={28} />
        </div>
        <p className='font-medium'>{title}</p>
      </div>
    </div>
  );

  return (
    <>
      {expanded ? (
        content
      ) : (
        <Tooltip content={title} relationship='label' positioning='after'>
          {content}
        </Tooltip>
      )}
    </>
  );
};

const Sidenav = () => {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={mergeClasses(
        classes.container,
        isExpanded && classes.expanded
      )}
    >
      <div className={mergeClasses(classes.content, 'flex flex-col')}>
        <div className={classes.header}>
          <button
            className='w-16 h-16'
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            <NavigationRegular fontSize={28} />
          </button>
        </div>
        <div className={mergeClasses(classes['links-container'], 'gap-2 p-2')}>
          {_.map(navItems, (item) => (
            <NavLink
              key={uuid()}
              to={item.route}
              className='w-full overflow-hidden'
            >
              {({ isActive }) => (
                <NavItem isActive={isActive} expanded={isExpanded} {...item} />
              )}
            </NavLink>
          ))}
        </div>
        <div className='flex-1' />
        <p className={classes.version}>Version 1.0.0</p>
      </div>
    </div>
  );
};

export default Sidenav;
