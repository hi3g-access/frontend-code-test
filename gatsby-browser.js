import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './src/components/GlobalStyle'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={{}}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
