import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const webshopDevicesQuery = graphql`
  query ProductListQuery {
    treApi {
      webshopDevices(customerType: consumer, deviceType: phone) {
        id
        products {
          bindingPeriod {
            duration
          }

          displayName
          model
          brand
          image {
            width
            url
            imageFile {
              childImageSharp {
                fixed(width: 80, height: 80) {
                  ...GatsbyImageSharpFixed
                }
              }
              id
            }
          }
          id
          postpaid {
            minCost
            originalRecurring
            recurring
          }
          urlSlug
        }
      }
    }
  }
`;

const Title = styled.div``;

const ProductsContainer = styled.div``;

const ProductList: React.FC<unknown> = () => {
  const data = useStaticQuery<GatsbyTypes.ProductListQueryQuery>(
    webshopDevicesQuery
  );

  const { products } = data.treApi
    .webshopDevices as GatsbyTypes.treApi_WebshopDevicesResponse;

  return (
    <div>
      <Title>Devices</Title>
      <ProductsContainer>{/* TODO */}</ProductsContainer>
    </div>
  );
};

export default ProductList;
