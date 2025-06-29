/*import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
*/

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Router } from "wouter";

// Hash-based routing for GitHub Pages
function useHashLocation(): [string, (to: string) => void] {
  return [
    window.location.hash.replace(/^#/, "") || "/",
    (to: string) => {
      window.location.hash = "#" + to;
    },
  ];
}

// Use type assertion to bypass TypeScript's incorrect typing
createRoot(document.getElementById("root")!).render(
  <Router hook={useHashLocation as any}>
    <App />
  </Router>
);
