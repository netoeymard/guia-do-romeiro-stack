// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#662B00',
    },
    secondary: {
      main: '#8E623A',
    },
    background: {
      default: '#EBE4C1',
    },

  },
  typography: {
    // Optionally set a custom or default font family
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
