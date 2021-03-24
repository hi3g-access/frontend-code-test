import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Product, { ProductType } from './Product'

const Title = styled.div`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1.2rem;
`
const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  text-align: center;
  align-items: center;
  transition: all var(--speed) cubic-bezier(0.34, 1.56, 0.64, 1);
  grid-gap: 10px;
  width: 100%;
  height: 100%;
`

const NavListLink = styled(Link)`
  color: black;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
`

const InputContainer = styled.div`
  width: 100%;
  outline: none;
  margin: 1.2em 0;
  border-radius: 8px;
  box-shadow: 0 0 10% black;
  label {
    color: gray;
  }
  input {
    color: black;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    padding: 0.6rem;
    width: 100%;
    border-radius: 8px;
    outline: none;
    box-shadow: 0 0 10% black;
  }
`

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

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchResults, setSearchResults] = useState<ProductType[] | []>([])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const input = React.useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (input.current) {
      input.current.focus()
    }
    const results = products.filter((product: { brand: string }) =>
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])

  return (
    <div>
      <InputContainer>
        <label htmlFor="search">search by brand</label>
        <input
          id="search"
          ref={input}
          type="text"
          value={searchTerm}
          placeholder="Type your favorite brand?"
          onChange={handleChange}
        />
      </InputContainer>
      <Title>Devices</Title>
      <ProductsContainer>
        {searchResults.map((product: ProductType) => (
          <NavListLink key={product.id} to={product.slug}>
            <Product product={product} />
          </NavListLink>
        ))}
      </ProductsContainer>
    </div>
  )
}

export default ProductList
