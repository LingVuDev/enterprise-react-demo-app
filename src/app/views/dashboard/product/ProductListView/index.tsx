import Header from './Header';
import Results from './Results';
import Container from '@mui/material/Container';
import styled from 'styled-components';

const Root = styled(Container)`
  :root {
    height: 100%;
    padding-top: ${({ theme }) => theme.spacing(3)};
  }

  .backdrop {
    z-index: ${({ theme }) => theme.zIndex.drawer + 1};
    color: #fff;
  }
`;

const ProductListView = () => {
  return (
    <Root>
      <Header />
      <Results />
    </Root>
  );
};

export default ProductListView;
