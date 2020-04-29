import Link from 'next/link'

const Metabar = () => (
  <div className="pt-8">
    <h1 className="font-semibold text-xl">don's notes 📝</h1>
    <div className="text-sm">
      <Link href="/">
        <a className="text-indigo-600">home</a>
      </Link>{' '}
      ·{' '}
      <a href="https://twitter.com/donaldhuh" className="text-indigo-600">
        twitter
      </a>{' '}
      ·{' '}
      <a href="https://www.linkedin.com/in/donaldhuh" className="text-indigo-600">
        linkedin
      </a>
    </div>
    <hr className="my-8" />
  </div>
)

export default Metabar
