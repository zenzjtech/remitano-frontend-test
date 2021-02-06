import * as React from 'react';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SnackbarProvider } from 'notistack';

import reduxStore from './store';
import theme from './theme';
import Home from './page/home';

const { store, persistor } = reduxStore();

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SnackbarProvider maxSnack={3}>
            <CssBaseline />
            <ThemeProvider theme={theme}>
              <Home />
            </ThemeProvider>
          </SnackbarProvider>
        </PersistGate>
      </Provider>
    </StyledEngineProvider>
  );
}
