import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lightBlue } from '@mui/material/colors';
import classNames from 'classnames';

const StyledBox = styled(Box)`
  flex-grow: 1;

  .title {
    flex-grow: 1;
  }

  .link {
    color: ${lightBlue[50]};
    text-decoration: none;
  }
`;

export default function ButtonAppBar() {
  return (
    <StyledBox>
      <AppBar position="static">
        <Toolbar>
          <Link className={classNames('link', 'title')} to="/">
            LOGO
          </Link>
          <Button color="inherit">
            <Link className={classNames('link')} to="/">
              Home
            </Link>
          </Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Dashboard</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </StyledBox>
  );
}
