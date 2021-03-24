import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 84px;
  max-width: 960px;
  margin: 0 auto;
  padding: 0;
`
const LayoutContainer = styled.div`
  background: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px 0px;
  border-top: 3px solid rgb(255, 92, 0);
`
const Logo = styled.img``

const Header: React.FC = () => {
  return (
    <LayoutContainer>
      <Layout>
        <Logo src="https://www.tre.se/images/logo.jpg" alt="Logo" />
      </Layout>
    </LayoutContainer>
  )
}

export default Header
