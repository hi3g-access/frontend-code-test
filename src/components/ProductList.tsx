import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Title = styled.div``;

const ProductsContainer = styled.div``;

const ProductList: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      allProduct {
        nodes {
          id
          brand
          image
          model
          displayName
          slug
        }
      }
    }
  `);
  const products = data.allProduct.nodes;

  return (
    <div>
      <Title>Devices</Title>
      <ProductsContainer>{/* TODO */}</ProductsContainer>
    </div>
  );
};

export default ProductList;
