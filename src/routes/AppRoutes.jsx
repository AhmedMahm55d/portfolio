import { Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/projects"
          element={<ProjectsPage />}
        />

        <Route
          path="/projects/:slug"
          element={<ProjectDetailsPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;