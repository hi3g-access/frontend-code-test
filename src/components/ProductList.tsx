import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import products from '../products.json';

const Title = styled.div``;

const ProductsContainer = styled.div``;

const ProductList: React.FC<unknown> = () => {
  return (
    <div>
      <Title>Devices</Title>
      <ProductsContainer>{/* TODO */}</ProductsContainer>
    </div>
  );
};

export default ProductList;
