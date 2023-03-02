// Import Libs
import { Outlet } from "react-router-dom";

// Import Components
import Sidebar from "../../components/Sidebar";

// Import Styles
import { Container } from "./styled";

// Import IMG/Icon
import logoImg from "../../assets/logo.svg";

const MainPage = () => {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} alt="Logotipo Food Commerce" />
        <Outlet />
      </section>
    </Container>
  );
};

export default MainPage;
