import * as React from 'react'

type Props = {}
type State = {}

class TSComponent extends React.Component<Props, State> {
  static defaultProps = {}

  state: State = {}

  constructor(props: Props) {
    super(props)
  }

  handleEvent = () => {
    // use arrow function to not bind context of the class(ie. 'this') to method
  }

  render() {
    return <div>TSComponent</div>
  }
}

export default TSComponent
