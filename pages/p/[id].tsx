import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import Date from '../../components/date'
import Layout from '../../components/layout'
import { getPostIds, getPostContent, PostContent } from '../../lib/posts'

interface Props {
  postContent: PostContent
}

const Post = ({ postContent }: Props) => (
  <Layout>
    <Head>
      <title>{postContent.title}</title>
    </Head>
    <article>
      <h1 className="post-title">{postContent.title}</h1>
      {postContent.subtitle && (
        <h2 className="post-subtitle">{postContent.subtitle}</h2>
      )}
      <div className="post-date">
        Published on <Date dateString={postContent.date} />
      </div>
      <div
        className="markdown pt-8"
        dangerouslySetInnerHTML={{ __html: postContent.contentHtml }}
      />
    </article>
  </Layout>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostIds()
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postContent = await getPostContent(params.id as string)
  return {
    props: { postContent },
  }
}

export default Post
