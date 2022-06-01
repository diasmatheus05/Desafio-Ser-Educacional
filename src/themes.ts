import "@mui/styles";

import { Theme, createTheme } from "@mui/material/styles";
import { ptBR } from "@mui/material/locale";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    phone: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

export default createTheme(
  {
    spacing: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 120, 160, 200],
    breakpoints: {
      values: {
        xs: 0,
        phone: 360,
        sm: 600,
        md: 960,
        lg: 1200,
        xl: 1920,
      },
    },
    palette: {
      mode: "light",
      primary: {
        main: "#200CF6",
        contrastText: "#FFFFFF",
        light: "#774cfa",
        dark: "#4b2cf8",
      },
      secondary: {
        main: "#cd8cff",
        contrastText: "#FFFFFF",
        dark: "#a26cfd",
      },
      text: {
        primary: "#200CF6",
        secondary: "#cd8cff",
        disabled: "#CCCCCC",
      },
    },
    typography: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
  },
  ptBR
);
