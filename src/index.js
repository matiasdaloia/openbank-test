import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/core";
import { lightTheme } from "config/theme";
import { cssVariables } from "config/theme/cssVariables";
// eslint-disable-next-line no-unused-vars
import i18n from "config/localization/i18n";

ReactDOM.render(
  <ThemeProvider theme={{ ...lightTheme, ...cssVariables }}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
