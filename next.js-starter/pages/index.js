import React from 'react'
import Layout from 'components/layout'
import Link from 'next/link'
import Clock from 'components/clock'
import { startClock } from 'store/clock/clockActions'
import { withReduxSaga } from 'store'

class Counter extends React.Component {
  static async getInitialProps({ store }) {
    return {}
  }

  constructor(props) {
    super(props)
    props.dispatch(startClock())
  }

  render() {
    const clock = this.props.clock
    const { title, lastUpdate, light } = clock

    return (
      <Layout>
        <div>
          <h1>{title}</h1>
          <Clock lastUpdate={lastUpdate} light={light} />

          <div>
            <Link href={'/other'}>
              <a>
                Navigate to <code>/other</code>{' '}
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  clock: state.clock,
})

export default withReduxSaga(Counter, mapStateToProps)
