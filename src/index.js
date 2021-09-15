import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import mixin from "styles/mixin";
import { GlobalStyles } from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={{ ...mixin }}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
