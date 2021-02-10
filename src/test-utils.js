// test-utils.js
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
// Import your own reducer
import reducer from './reducers'

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>
      <SnackbarProvider>
        {children}
      </SnackbarProvider>
    </Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
