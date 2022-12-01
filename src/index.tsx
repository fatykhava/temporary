import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";

import "./assets/styles/style.scss";
import theme from "./theme";
import Home from "./pages/Home";
import Team from "./pages/Team";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Routes>
            <Route path="/team" element={<Team />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </HelmetProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
