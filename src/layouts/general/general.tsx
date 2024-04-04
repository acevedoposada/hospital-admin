import {
  Avatar,
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Persona,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  PresenceBadgeStatus,
  mergeClasses,
} from '@fluentui/react-components';
import {
  AlertBadgeRegular,
  AlertRegular,
  ArrowExitFilled,
  CalendarLtrRegular,
  FluentIcon,
  PersonRegular,
} from '@fluentui/react-icons';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import { States, statesTitles } from 'constants/status';
import { MobileNav, Sidenav, StateSubMenu } from 'components';
import { useLayoutContext } from 'context';

import { useStyles } from './general.styles';

const General = () => {
  const [notificationsCount] = useState(0);
  const [currentState, setCurrentState] = useState<PresenceBadgeStatus>(
    States.available as unknown as PresenceBadgeStatus
  );

  const { title, icon: Icon } = useLayoutContext();
  const classes = useStyles();

  const NavbarIcon = (Icon ?? CalendarLtrRegular) as FluentIcon;

  return (
    <main className={mergeClasses(classes.layout, 'flex-auto')}>
      <section className={mergeClasses(classes.container, 'flex-auto')}>
        <article className='h-full hidden md:flex '>
          <Sidenav />
        </article>
        <article className={mergeClasses(classes.content, 'flex-auto')}>
          <nav className={classes.navbar}>
            <aside className='h-full flex items-center gap-3'>
              <Avatar
                size={36}
                color='cornflower'
                icon={<NavbarIcon fontSize={24} className='opacity-70' />}
              />
              <h1 className={classes.title}>{title}</h1>
            </aside>
            <aside className='h-full'>
              <Popover>
                <PopoverTrigger>
                  <Button
                    appearance='transparent'
                    className={classes['notifications-btn']}
                  >
                    {notificationsCount > 0 ? (
                      <AlertBadgeRegular fontSize={24} />
                    ) : (
                      <AlertRegular fontSize={24} />
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverSurface>
                  Content
                </PopoverSurface>
              </Popover>
              <Menu>
                <MenuTrigger disableButtonEnhancement>
                  <Button appearance='transparent' className='h-full'>
                    <Persona
                      textPosition='before'
                      name='John Doe'
                      presence={{ status: currentState }}
                      secondaryText={
                        statesTitles[currentState as keyof typeof statesTitles]
                      }
                      avatar={{ color: 'colorful' }}
                    />
                  </Button>
                </MenuTrigger>
                <MenuPopover>
                  <MenuList>
                    <MenuItem icon={<PersonRegular />} disabled>
                      Perfil
                    </MenuItem>
                    <StateSubMenu onChange={setCurrentState} />
                    <MenuItem icon={<ArrowExitFilled />}>
                      Cerrar sesión
                    </MenuItem>
                  </MenuList>
                </MenuPopover>
              </Menu>
            </aside>
          </nav>

          <div className='relative overflow-x-hidden'>
            <Outlet />
          </div>
        </article>
      </section>
      <MobileNav />
    </main>
  );
};

export default General;
