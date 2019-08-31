import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose, Dispatch } from 'redux'
import { RootState } from '../../store/rootReducer'
// import namedActions from '../../store/name/actions';
import { returntypeof } from 'react-redux-typescript'

const mapStateToProps = (state: RootState) => ({
  // prop: state.name.prop,
})

const mapDispatchToProps = (dispatch: Dispatch<{}>) =>
  bindActionCreators(
    {
      // name: namedActions.name,
    },
    dispatch
  )

const statePropTypes = returntypeof(mapStateToProps)
const actionPropTypes = returntypeof(mapDispatchToProps)

type Props = typeof statePropTypes & typeof actionPropTypes & {}
type State = {}

class Container extends React.Component<Props, State> {
  static defaultProps = {}
  state: State = {}

  constructor(props: Props) {
    super(props)
  }

  render() {
    return null
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Container)
