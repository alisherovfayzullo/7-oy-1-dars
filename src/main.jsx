import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import MainContextProvider from "./context/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <MainContextProvider>
    <App />
  </MainContextProvider>
);
