import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import store from "./redux/store";
import { Provider } from "";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
