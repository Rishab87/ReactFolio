import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

//link redux code to react code using provider ,wrap krne se app aur uske andar ke sare elements redux wali functionality use kr payenge
//we need to pass store(centralized data) in provider
root.render(
  <Provider store={store}> {/*what happens when wrap app with provider */}
    <App />
  </Provider>
);
