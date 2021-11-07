import Header from './Header';
import ProductCreateForm from './ProductCreateForm';
import Container from '@mui/material/Container';
import styled from 'styled-components';

const Root = styled(Container)``;

const ProductCreateView = () => {
  return (
    <Root>
      <Header />
      <ProductCreateForm />
    </Root>
  );
};

export default ProductCreateView;
