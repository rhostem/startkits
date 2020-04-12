import React from 'react'
import { bindActionCreators } from 'redux'
import { withReduxSaga } from 'store'
import { compose } from 'ramda'
// import PropTypes from 'prop-types'

class NextPage extends React.Component {
  static propTypes = {}

  static async getInitialProps({ store }) {
    return {}
  }

  // constructor(props) {
  //   super(props)
  // }

  render() {
    return <div>next page component with redux</div>
  }
}

const mapStateToProps = state => ({
  // name: state.reducer.prop
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // action,
    },
    dispatch
  )
}

export default withReduxSaga(compose(NextPage), mapStateToProps, mapDispatchToProps)
