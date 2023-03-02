import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Main from "./pages/Main";
import RepositoriesPage from "./pages/RepositoriesPage";

export const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:login/repositories" element={<RepositoriesPage />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
