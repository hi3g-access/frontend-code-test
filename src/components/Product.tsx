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

const StyledCard = styled.div``

const StyledCardTitle = styled.div``

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
