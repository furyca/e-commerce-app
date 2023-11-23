import { createTheme } from "@mui/material";

const components = {
  MuiCssBaseline: {
    styleOverrides: {
      "#root": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      },
      a: {
        textDecoration: "none",
        color: "unset",
      },
      'th, td': {
        paddingTop: '2rem',
        paddingBottom: '2rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      'th:first-of-type, td:first-of-type': {
        textAlign: 'start'
      },
      'th:not(:first-of-type), td:not(:first-of-type)': {
        textAlign: 'end'
      },
      'h4': {
        textAlign: 'center'
      }
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  components,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components,
});
