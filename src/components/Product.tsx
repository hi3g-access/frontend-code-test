import React from 'react';
import styled from 'styled-components';
import Image from './Image';

type Props = {
  product: {
    brand: string;
    displayName: string;
    id: string;
    image: string;
    model: string;
  };
};

const ProductImage = styled(Image)``;

const StyledCard = styled.div``;

const StyledCardTitle = styled.div``;

const Product: React.FC<Props> = ({ product }) => {
  const { brand, model } = product;

  return (
    <StyledCard>
      <ProductImage alt={product.displayName} src={product.image} />
      <StyledCardTitle>
        {brand} - {model}
      </StyledCardTitle>
    </StyledCard>
  );
};

export default Product;
