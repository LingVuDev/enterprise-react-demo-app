import {
  PieChart,
  ShoppingCart,
  KeyboardArrowUp,
  KeyboardArrowDown,
  List as ListIcon,
  AddBox,
  Logout,
} from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Toolbar from '@mui/material/Toolbar';
import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const RootDrawer = styled(Drawer)`
  display: flex;
  width: ${({ theme }) => theme.variables.drawerWidth};
  flex-shrink: 0;

  & .MuiDrawer-paper {
    width: ${({ theme }) => theme.variables.drawerWidth};
    box-sizing: border-bo;
  }

  .drawer-paper {
    width: ${({ theme }) => theme.variables.drawerWidth};
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

  .nested {
    padding-left: ${({ theme }) => theme.spacing(4)};
  }
`;

const DashboardSidebarNavigation = () => {
  const { url } = useRouteMatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(currentOpen => !currentOpen);
  };

  return (
    <RootDrawer
      className={classNames('drawer-paper')}
      variant="permanent"
      anchor="left"
    >
      <Toolbar className={classNames('toolbar')}>
        <Link className={classNames('logo-with-link')} to={url}>
          Logo
        </Link>
      </Toolbar>
      <List>
        <ListSubheader>Reports</ListSubheader>
        {/* Dashboard */}
        <Link to={url}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PieChart />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListSubheader>Management</ListSubheader>
        {/* Products */}
        <ListItem disablePadding>
          <ListItemButton onClick={handleOpen}>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Products" />
            {open ? (
              <KeyboardArrowUp color="primary" />
            ) : (
              <KeyboardArrowDown color="primary" />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* List Products */}
            <Link to={`${url}/list-products`}>
              <ListItem className="nested" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ListIcon />
                  </ListItemIcon>
                  <ListItemText primary="List Products" />
                </ListItemButton>
              </ListItem>
            </Link>
            {/* Create Product */}
            <Link to={`${url}/create-product`}>
              <ListItem className="nested" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AddBox />
                  </ListItemIcon>
                  <ListItemText primary="Create Product" />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Collapse>
        {/* Settings and Privacy */}
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
        {/* Logout */}
        <a href="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </a>
      </List>
    </RootDrawer>
  );
};

export default DashboardSidebarNavigation;
