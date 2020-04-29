import Head from 'next/head'

import Metabar from '../components/metabar'
import Footer from '../components/footer'

export const SITE_TITLE = 'don writes'

interface Props {
  children: React.ReactNode
  home?: boolean
}

const Layout = ({ children, home }: Props) => (
  <div className="container mx-auto max-w-screen-md px-8">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="" />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          SITE_TITLE
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={SITE_TITLE} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <Metabar />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
