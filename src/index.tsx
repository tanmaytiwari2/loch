import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingWhales } from "./screens/LandingWhales";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LandingWhales />
  </StrictMode>,
);
