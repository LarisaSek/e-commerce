import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import App from "./App";
import "./styles.css";

/* Import Google Fonts */
import "@fontsource/poppins/400.css"; /* Regular */
import "@fontsource/poppins/600.css"; /* Semi-bold */
import "@fontsource/montserrat/400.css"; /* Regular */
import "@fontsource/montserrat/700.css"; /* Bold */

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <Router>
      <App />
    </Router>
  </CartProvider>
);
