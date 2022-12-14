import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { RoutesMain as Routes } from "./routes";
import { Global } from "./styles/Global";
import { theme } from "./styles/themes";

export const App = () => {
  return (
    <>
      <Global />
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
};
