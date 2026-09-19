import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/layout/ScrollToTop";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <div className="app">
         <ScrollToTop />
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default MainLayout;