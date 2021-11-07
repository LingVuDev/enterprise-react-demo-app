import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  .action {
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    & + & {
      margin-left: ${({ theme }) => theme.spacing(1)};
    }
  }
`;

const Header = () => {
  return (
    <Root>
      <h1>Header - CreativeView Works!</h1>
    </Root>
  );
};

export default Header;
