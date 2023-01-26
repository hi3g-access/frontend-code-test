import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/GlobalStyle'
import Layout from '../components/Layout'

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
