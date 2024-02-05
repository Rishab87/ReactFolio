import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter> {/*it tells browser ki yeh routes hai isse route se yaha jane wale ho -->internal working , what happens we wrap it on app? */}
         <App />
    </BrowserRouter>
);