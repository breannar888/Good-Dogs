import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#969EA1",
    },
    secondary: {
      main: "#4B7D8C",
    },
    warning: {
      main: "#ed6c02",
    },
  },
  typography: {
    fontSize: 13,
    fontFamily: ['"Hind Siliguri"', "sans-serif"].join(","),
  },
});

export default theme;
