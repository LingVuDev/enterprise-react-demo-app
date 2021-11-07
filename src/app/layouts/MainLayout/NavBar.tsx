import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { lightBlue } from '@mui/material/colors';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
          <Button color="inherit">
            <Link className={classNames('link')} to="/about">
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classNames('link')} to="/dashboard">
              Dashboard
            </Link>
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </StyledBox>
  );
}
