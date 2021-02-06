import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const primaryColor = colors.indigo[500]
const secondaryColor = colors.green[500]
const secondGradientColor = '#4791db'

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: 'rgb(247, 249, 252)', // colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#1976d2',
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  shadows,
  typography,
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        background: `linear-gradient(45deg, ${primaryColor} 50%, ${secondGradientColor} 80%)`,
        color: 'white',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      },
    },
  },
});

export default theme;
