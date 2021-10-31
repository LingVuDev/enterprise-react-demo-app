import React, { ReactNode, HTMLProps } from 'react';
import { forwardRef } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

interface PagesProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  title?: string;
}

const Title = styled.h1`
  padding-left: 24px;
`;

const Page = forwardRef<HTMLDivElement, PagesProps>(
  ({ children, title = '', ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Title>{title}</Title>
        {children}
      </div>
    );
  },
);

export default Page;
