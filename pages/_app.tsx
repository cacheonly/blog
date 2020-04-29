import { AppProps } from 'next/app'

import '../styles/index.css'

export default ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)
