import React, { ReactNode, HTMLProps } from 'react';
import { forwardRef } from 'react';
import { Helmet } from 'react-helmet-async';

interface PagesProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  title?: string;
}

const Page = forwardRef<HTMLDivElement, PagesProps>(
  ({ children, title = '', ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <h1>{title}</h1>
        {children}
      </div>
    );
  },
);

export default Page;
