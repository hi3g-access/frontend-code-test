import React from 'react'
import styled from 'styled-components'
import Image from './Image'

export type ProductType = {
  brand: string
  displayName: string
  id: string
  image: string
  model: string
  slug: string
}

type Props = {
  product: ProductType
}

const ProductImage = styled(Image)``

const StyledCard = styled.div`
  /* background-color: #fd940c; */
  background-color: white;
  display: flex;
  width: 100%;
  height: 600px;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin: 2px;
  border-radius: 8px;
  &:hover {
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 15%), 0px 1px 3px 1px rgb(0 0 0 / 12%);
    cursor: pointer;
    transition: all 200ms ease-in-out 0s;
  }
`
const StyledCardTitle = styled.div`
  /* font-size: 1rem; */
  /* text-decoration: none; */
`

const Product: React.FC<Props> = ({ product }) => {
  const { brand, model } = product

  return (
    <StyledCard>
      <ProductImage alt={product.displayName} src={product.image} />
      <StyledCardTitle>
        {brand} - {model}
      </StyledCardTitle>
    </StyledCard>
  )
}

export default Product
