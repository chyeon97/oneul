import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import mixin from "styles/mixin";
import { GlobalStyles } from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <ThemeProvider theme={{ ...mixin }}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
