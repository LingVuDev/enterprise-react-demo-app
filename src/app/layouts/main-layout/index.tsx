import NavBar from './NavBar';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
};

const Root = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  height: 100%;
  overflow: hidden;
  width: 100%;

  .wrapper {
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
    padding-top: 64px;
  }

  .content-container {
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
  }

  .content {
    flex: 1 1 auto;
    height: 100%;
    overflow: auto;
  }
`;

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <Root>
        <div className="wrapper">
          <div className="content-container">
            <div className="content">{children}</div>
          </div>
        </div>
      </Root>
    </>
  );
};

export default MainLayout;
