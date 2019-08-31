import React from 'react'
import AppRoutes from './AppRoutes'
import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'
import store /* , { history } */ from './store'

/**
 * client-side routing of react-router
 * https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#notes-on-client-side-routing
 * https://reacttraining.com/react-router/web/api/HashRouter/basename-string
 */
const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={`/`}>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default Root
