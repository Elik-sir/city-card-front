import { createMuiTheme } from '@material-ui/core/styles';
export const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2', light: '#4791db', dark: '#115293' },
    secondary: { main: '#dc004e', light: '#e33371', dark: '#9a0036' },
    error: { main: '#f44336', light: '#e57373', dark: '#d32f2f' },
    success: { main: '#4caf50', light: '#81c784', dark: '#388e3c' },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
