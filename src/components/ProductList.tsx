import React from 'react';
import styled from 'styled-components';
import products from '../products.json';

const Title = styled.div``;

const ProductsContainer = styled.div``;

const ProductList: React.FC = () => {
  console.log('products', products);

  return (
    <div>
      <Title>Devices</Title>
      <ProductsContainer>{/* TODO */}</ProductsContainer>
    </div>
  );
};

export default ProductList;
