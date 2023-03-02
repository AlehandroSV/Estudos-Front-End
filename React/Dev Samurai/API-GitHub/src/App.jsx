import {} from "react-router-dom";
import MainRoutes from "./routes";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/global";
import { Normalize } from "styled-normalize";

const App = () => {
  return (
    <Theme>
      <MainRoutes />
      <GlobalStyle />
      <Normalize />
    </Theme>
  );
};

export default App;
