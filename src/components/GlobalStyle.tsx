import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #f1f1f1;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    line-height: 1.33;
    color: rgb(0, 0, 0);
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.25;
  }
`

export default GlobalStyle
