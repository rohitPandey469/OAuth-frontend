// bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
// bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
