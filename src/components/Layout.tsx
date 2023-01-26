import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0;
`

const Layout = ({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement => {
  return (
    <>
      <Header />
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
    </>
  )
}

export default Layout
