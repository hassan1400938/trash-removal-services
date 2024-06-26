import { createTheme, alpha, getContrastRatio } from "@mui/material/styles";

const [gambogeBase, gambogeLightest, gambogeLight, gambogeBaseD, gambogeDark] =
  ["#E8A901", "#fcf6e5", "#f4db95", "#E8A901", "#a27600"];
// const gambogeMain = alpha(gambogeBase, 0.8);

const theme = createTheme({
  palette: {
    primary: {
      lightest: gambogeLightest,
      light: gambogeLight,
      main: gambogeBase,
      dark: gambogeBaseD,
      white: "#fff",
      contrastText:
        getContrastRatio(gambogeBase, "#fff") > 4.5 ? "#fff" : "#000",
    },
    secondary: {
      main: "#f50057", // Change the secondary color
    },
  },
  typography: {
    // fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontFamily: "Nunito Sans", //400, 700, 900, 1000
    h1: {
      fontSize: "3em",
      // fontSize: { xs: "0.2em", sm: "0.2em", md: "70px", lg: "5em" },
      fontWeight: 1000,
    },
    h2: {
      fontSize: "2.5em",
      // fontSize: { xs: "0.1em", sm: "1.75em" },
      fontWeight: 1000,
    },
    h3: {
      fontSize: "1.5em",
      fontWeight: 900,
    },
    h4: {
      // fontSize: "1.2em",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1em",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.8em",
      fontWeight: 700, //Regular
    },
    subtitle1: {
      fontSize: "1.2em",
      fontWeight: 600,
      lineHeight: "1.2em",
    },
    subtitle2: {
      fontSize: "1.2em",
      fontWeight: 400,
      lineHeight: "1.2em",
    },
    // fontSize: 16, // Change the default font size
  },

  site: {
    name: "Amphaul",
    logo: "logo.webp",
  },

  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow:
            "0px 2px 4px 0px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.14)",
          // boxShadow:
          //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

          marginTop: "10px",
        },
      },
    },

    MuiPickersToolbar: {
      styleOverrides: {
        root: {
          color: gambogeBaseD,
          borderRadius: 0,
          borderWidth: 0,
          borderColor: "green",
          border: "0px solid",
          backgroundColor: gambogeLight,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          // color: gambogeDark,
          fontSize: "1.2em",
          fontWeight: 900,
          textTransform: "none",
          "&:hover": {
            color: "white",
          },
        },
        contained: {
          padding: "16px 42px",
        },
        outlined: {
          color: gambogeBaseD,
          borderColor: gambogeBase,
          "&:hover": {
            color: gambogeDark, // Change the text color on hover for outlined buttons
          },
        },
        text: {
          fontWeight: 700,
          color: gambogeBaseD,
          backgroundColor: gambogeLightest,
          "&:hover": {
            color: gambogeDark, // Change the text color on hover for outlined buttons
          },
        },
      },
    },
  },
});

export default theme;

// xs: //0
// sm: //600
// md: //900

// lg: //1200
// xl: //1536

// @media only screen and (min-width: 751px) {
//   .hero_section {
//     background-image: url('https://static.wixstatic.com/media/1147e7_e863a7d8c6bc42418e34e13c9c4eddc5~mv2.webp');
//   }
// }

//  @media only screen and (max-width: 750px) {
//   .hero_section {
//     background-image: url('https://static.wixstatic.com/media/1147e7_9a25bbc292ce4ae0b57d70ec69c4cf8e~mv2.webp') !important;
//     background-position: center;
//     background-repeat: no-repeat;
// }
// }
