import Head from 'next/head'
import Link from 'next/link'

import Date from '../components/date'
import Layout, { SITE_TITLE } from '../components/layout'
import { getPostPreviews, PostPreview } from '../lib/posts'

interface Props {
  postPreviews: PostPreview[]
}

const Home = ({ postPreviews }: Props) => (
  <Layout>
    <Head>
      <title>{SITE_TITLE}</title>
    </Head>
    <div>
      <ul>
        {postPreviews.map(({ id, title, date }) => (
          <li key={id}>
            <Link href="/p/[id]" as={`/p/${id}`}>
              <a className="text-md text-indigo-600">{title}</a>
            </Link>
            <div className="text-xs text-gray-600">
              <Date dateString={date} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export const getStaticProps = async () => {
  const postPreviews = getPostPreviews()

  return {
    props: {
      postPreviews,
    },
  }
}

export default Home
