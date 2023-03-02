import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";

import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/global";
import { Normalize } from "styled-normalize";

const App = () => {
  return (
    <BrowserRouter>
      <Theme>
        <AppRoutes />
        <GlobalStyle />
        <Normalize />
      </Theme>
    </BrowserRouter>
  );
};

export default App;
