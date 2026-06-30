import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./styles/variables.css";
import "./styles/typography.css";
import "./styles/animations.css";
import "./styles/globals.css";
import "./styles/responsive.css";

const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
