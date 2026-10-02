import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div data-theme={"light"} className="relative">
      <a className="sr-only focus:not-sr-only focus:block focus:bg-white focus:p-4" href="#main-content">Skip to main content</a>
      <NavBar />
      <Outlet />
      <footer className="bg-charcoal">
        <Footer />
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default Main;
