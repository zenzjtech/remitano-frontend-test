import * as React from 'react';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import reduxStore from './store';
import theme from './theme/index';
import Album from './Album';

const { store, persistor } = reduxStore();

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Album />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </StyledEngineProvider>
  );
}
