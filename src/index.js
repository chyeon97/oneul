import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import mixin from "styles/mixin";
import { GlobalStyles } from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <div>
    <GlobalStyles />
    <ThemeProvider theme={{ ...mixin }}>
      <App />
    </ThemeProvider>
  </div>,
  document.getElementById("root")
);
