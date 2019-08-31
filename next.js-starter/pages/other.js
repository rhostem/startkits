import React from 'react'
import Layout from '../components/layout'
import Link from 'next/link'

class Counter extends React.Component {
  static async getInitialProps({ store }) {
    return {}
  }

  render() {
    return (
      <Layout>
        <Link href={'/'}>
          <a>
            Navigate to <code>/</code>
          </a>
        </Link>
      </Layout>
    )
  }
}

export default Counter
