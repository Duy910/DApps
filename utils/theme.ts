import { Roboto, Chakra_Petch } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { useRouter } from "next/router";

export const chakra_petch = Chakra_Petch({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
export let theme = createTheme({
  palette: {
    primary: {
      main: "#FDFEFE",
    },
    secondary: {
      main: "#F7DC6F",
    },

    error: {
      main: red.A400,
    },
    info: {
      main: "#1c214e",
    },
  },
  typography: {
    fontFamily: chakra_petch.style.fontFamily,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "outlined",
        color: "secondary",
        sx: {
          border: "2px solid",
          ":hover": {
            border: "4px solid ",
          },
        },
      },

      styleOverrides: {
        root: {},
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
        variant: "inherit",
      },

      styleOverrides: {
        root: {
          cursor: "pointer",
          ":hover": {
            color: "#F7DC6F",
          },
        },
      },
    },
    MuiStack: {
      defaultProps: {
        justifyContent: "center",
        direction: "row",
        height: "100%",
        alignItems: "center",
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient( -144deg, rgb(38,45,88) 5%, rgb(43,46,104) 35%, rgb(22,30,75) 65%, rgb(29,34,79) 95%)",
          minHeight: "100vh",
          borderRadius: "0",
        },
      },
    },
    MuiTypography: {
      defaultProps: {},
      styleOverrides: {
        root: {
          color: "#FDFEFE",
        },
      },
    },
    MuiIcon: {
      defaultProps: {
        fontSize: "large",
        color: "primary",
        sx: {
          ":hover": {
            color: "#F7DC6F",
          },
        },
      },
      styleOverrides: {
        root: {},
      },
    },
  },
});
theme = responsiveFontSizes(theme);
