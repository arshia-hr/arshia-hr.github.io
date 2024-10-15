import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ShoopingCartProivder } from "./context/ShoopingCartContext";
import { LogInProvider } from "./context/LogInContext";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ShoopingCartProivder>
        <LogInProvider>
          <ThemeContextProvider>
            <Provider store={store}>
              <App/>
            </Provider>
          </ThemeContextProvider>
        </LogInProvider>
      </ShoopingCartProivder>
    </BrowserRouter>
  </StrictMode>
);
