import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from 'features/todo/todoSlice'

const mapStateToProps = (state: IRootState) => ({
  todo: state.todo,
})

const mapDispatchToProps = (dispatch: IAppDispatch) => {
  return bindActionCreators(
    {
      addTodo: addTodo,
    },
    dispatch
  )
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
  backgroundColor: string;
}

function connectedComponent(props: Props) {
  return <div>connectedComponent</div>
}

export default connector(connectedComponent)
