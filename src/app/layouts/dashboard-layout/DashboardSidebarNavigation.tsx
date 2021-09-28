import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import classNames from 'classnames';
import { useRouteMatch } from 'react-router-dom';

const drawerWidth = '240px';

const Root = styled.div`
  display: flex;

  .drawer {
    width: ${drawerWidth};
    flex-shrink: 0;

    & .MuiDrawer-paper {
      width: ${drawerWidth};
      box-sizing: border-bo;
    }
  }

  .drawer-paper {
    width: ${drawerWidth};
  }

  .drawer-container {
    overflow: auto;
  }

  .toolbar {
    width: 6rem;
    height: auto;
  }

  .content {
    flex-grow: 1;
    padding: ${({ theme }) => theme.spacing(3)};
  }

  .link {
    text-decoration: none;
    color: inherit;
  }

  .logo-with-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
`;

const DashboardSidebarNavigation = () => {
  const { url } = useRouteMatch();
  return (
    <Root>
      <Drawer
        className={classNames('drawer', 'drawer-paper')}
        variant="permanent"
        anchor="left"
      >
        <Toolbar className={classNames('toolbar')}>
          <Link className={classNames('logo-with-link')} to={url}>
            Logo
          </Link>
        </Toolbar>
        <List>
          <Link to={`${url}/settings-and-privacy`}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings and Privacy" />
              </ListItemButton>
            </ListItem>
          </Link>
          <a href="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </a>
        </List>
      </Drawer>
    </Root>
  );
};

export default DashboardSidebarNavigation;