import type { AppProps } from 'next/app'
import Head from 'next/head'
import theme from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="shortcut icon" href="/img/favicon-ipr.png" />
        <link rel="apple-touch-icon" href="/img/favicon-ipr.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="boilerplate" />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
