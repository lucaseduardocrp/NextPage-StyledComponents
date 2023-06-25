import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { themes } from '../styles/themes';
import { GlobalStyles } from '../styles/global-styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  ) 
}
