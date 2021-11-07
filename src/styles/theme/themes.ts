import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    variables: {
      [name: string]: string | number;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    variables?: {
      [name: string]: string | number;
    };
  }
}

const variables = {
  drawerWidth: '240px',
};

const lightTheme = createTheme({
  variables,
  palette: {
    mode: 'light',
    text: {
      primary: 'rgba(58,52,51,1)',
      secondary: 'rgba(58,52,51,0.7)',
    },
  },
});

const darkTheme = createTheme({
  variables,
  palette: {
    mode: 'dark',
    text: {
      primary: 'rgba(241,233,231,1)',
      secondary: 'rgba(241,233,231,0.6)',
    },
  },
});

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
