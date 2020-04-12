import React, { Component } from 'react'

export function hoc(BaseComponent) {
  return class wrappedComponent extends Component {
    render() {
      const passedProps = Object.assign({}, this.props, {})

      return <BaseComponent {...passedProps} />
    }
  }
}

export default function hocWithOption(options = {}) {
  return BaseComponent => {
    class wrappedComponent extends Component {
      render() {
        const passedProps = Object.assign({}, this.props, {})

        return <BaseComponent {...passedProps} />
      }
    }

    return wrappedComponent
  }
}
