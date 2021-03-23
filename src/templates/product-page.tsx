import React from 'react'
import SEO from '../components/SEO'
import Product from '../components/Product'
import { graphql, PageProps } from 'gatsby'
import { ProductType } from '../components/Product'
interface DetailsProps extends PageProps {
  data: {
    product: ProductType
  }
}

const DevicePage: React.FC<DetailsProps> = props => {
  const { model } = props.data.product
  return (
    <>
      <SEO title="Device" />
      {model}
      <Product product={props.data.product} />
    </>
  )
}

export const query = graphql`
  query productDetails($slug: String) {
    product(slug: { eq: $slug }) {
      id
      image
      model
      brand
      displayName
    }
  }
`

export default DevicePage
