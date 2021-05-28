import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { ProductType } from '../types';

const Title = styled.div``;

const ProductsContainer = styled.div``;

const ProductList: React.FC = () => {
  const data = useStaticQuery(graphql`
    query Products {
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
  const products: ProductType[] = data.allProduct.nodes;

  return (
    <div>
      <Title>Devices</Title>
      <ProductsContainer>{/* TODO */}</ProductsContainer>
    </div>
  );
};

export default ProductList;
