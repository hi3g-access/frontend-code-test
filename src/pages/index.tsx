import React from 'react';
import SEO from '../components/SEO';
import ProductList from '../components/ProductList';

const IndexPage = (): React.ReactElement => (
  <>
    <SEO title="Home" />
    <ProductList />
  </>
);

export default IndexPage;
