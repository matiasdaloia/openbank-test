import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { lightPalette } from "./palette";
import { typography } from "./typography";

const theme = createTheme({
  palette: lightPalette,
  typography: typography,
});

export const lightTheme = responsiveFontSizes(theme);

lightTheme.props = {
  MuiButton: {
    disableElevation: true,
  },
};

lightTheme.overrides = {
  MuiButton: {
    root: {
      fontFamily: "Quicksand",
      textTransform: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
    containedPrimary: {
      backgroundColor: lightTheme.palette.secondary.main,
      color: lightTheme.palette.white,
      "&:hover": {
        backgroundColor: `${lightTheme.palette.primary.main} !important`,
      },
    },
  },
};
