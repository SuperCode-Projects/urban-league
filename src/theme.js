import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange, lightBlue, green } from "@material-ui/core/colors";

export default createMuiTheme({
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: lightBlue[500],
    },
    error: {
      main: green[600],
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderRadius: "20px",
            height: "2.8em",
            // backgroundColor: "white",
          },
        },
      },
    },

    MuiButton: {
      textPrimary: {
        color: "white",
      },
      sizeSmall: {
        borderRadius: "20px",
        backgroundColor: orange[400],
        color: "white",
        height: "40px",
      },

      sizeLarge: {
        borderRadius: "20px",
        backgroundColor: lightBlue[500],
      },
    },
  },
  // props: {
  //   MuiTextField: {
  //     borderRadius: "20px",
  //   },
  // },
});
