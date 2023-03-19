import { Roboto, Chakra_Petch } from "@next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { useRouter } from "next/router";

export const chakra_petch = Chakra_Petch({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "fallback",
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
      main: "#1a1441",
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
            color: "#FFF8DC",
            border: "2px solid",
          },
        },
      },

      styleOverrides: {
        root: {
          ":disabled": {
            color: "#FFF8DC",
            border: "2px solid",
          },
        },
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
            "linear-gradient(141deg, rgba(11,11,11,0.9220938375350141) 0%, rgba(5,2,62,1) 13%, rgba(15,15,73,1) 72%, rgba(77,67,11,1) 100%)",
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
