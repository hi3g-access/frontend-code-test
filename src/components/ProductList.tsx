import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Product, { ProductType } from './Product'
const Title = styled.div``

const ProductsContainer = styled.div``

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
  `)
  const products = data.allProduct.nodes

  return (
    <div>
      <Title>Devices</Title>
      <ProductsContainer>
        {products.map((product: ProductType) => (
          <Link key={product.id} to={product.slug}>
            <Product product={product} />
          </Link>
        ))}
      </ProductsContainer>
    </div>
  )
}

export default ProductList
