import * as React from 'react'

type Props = {}

const TSSFC: React.SFC<Props> = props => {
  const { children, ...restProps } = props

  return <div {...restProps}>{children}</div>
}

export default TSSFC
