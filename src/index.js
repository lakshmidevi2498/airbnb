  import React from "react";
  import ReactDOM from "react-dom/client";
  import { ThemeProvider, CssBaseline } from '@mui/material';
  import App from "./App";
  import theme from './utilities/Theme';
  import "./App.css"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
);

