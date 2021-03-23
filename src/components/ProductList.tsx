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

  const [searchTerm, setSearchTerm] = React.useState<string>('')
  const [searchResults, setSearchResults] = React.useState([])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  React.useEffect(() => {
    const results = products.filter((product: { brand: string }) =>
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])

  return (
    <div>
      <Title>Devices</Title>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ProductsContainer>
        {searchResults.map((product: ProductType) => (
          <Link key={product.id} to={product.slug}>
            <Product product={product} />
          </Link>
        ))}
      </ProductsContainer>
    </div>
  )
}

export default ProductList
