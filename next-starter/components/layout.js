import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 1rem;
`

class Page extends React.Component {
  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <Wrapper>{this.props.children}</Wrapper>
  }
}

export default Page
