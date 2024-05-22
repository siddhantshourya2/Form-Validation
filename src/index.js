import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import FormComponent from "./components/form-component.js";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<FormComponent />);