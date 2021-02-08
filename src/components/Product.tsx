import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ProductImage = styled(Img)``;

const StyledCard = styled.div``;

const StyledCardTitle = styled.div``;

const Product = ({
  product,
}: {
  product: GatsbyTypes.treApi_WebshopProduct;
}): React.ReactElement => {
  console.log('product', product);
  const { brand, model } = product;

  return (
    <StyledCard>
      <ProductImage {...product.image?.childImageSharp} />
      <StyledCardTitle>
        {brand} - {model}
      </StyledCardTitle>
    </StyledCard>
  );
};

export default Product;
