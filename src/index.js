import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import store from "./components/store/store";
import { Provider } from "react-redux";

import App from "./App";
reactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
