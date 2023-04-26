import {
  BrowserRouter as MainRoute,
  Routes as RT,
  Route,
  Navigate,
} from "react-router-dom";
import { Dashboard, Login } from "../pages";

const Routes = () => {
  return (
    <MainRoute>
      <RT>
        <Route path="/pagina-inicial" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/pagina-inicial"></Navigate>} />
      </RT>
    </MainRoute>
  );
};

export default Routes;
