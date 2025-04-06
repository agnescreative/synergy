import { Navbar } from "../components/Navbar.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer.jsx";
import { VisitUs } from "../components/VisitUs.jsx";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";

export const Layout = () => {
  const location = useLocation();
  const isHomePage =
    location.pathname === "/" || location.pathname === "/banner2";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main
        className={"min-h-screen"}
        style={!isHomePage ? { paddingTop: "var(--navbar-height)" } : {}}
      >
        <Outlet />
        <VisitUs />
      </main>
      <Footer />
      <Analytics />
    </>
  );
};
