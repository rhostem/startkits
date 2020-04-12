import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'next/router'
import { compose } from 'ramda'

class ContainerComponent extends React.Component {
  static propTypes = {}

  // constructor(props) {
  //   super(props)
  // }

  render() {
    return <div>next.js container</div>
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // action
    },
    dispatch
  )
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(
  ContainerComponent
)
