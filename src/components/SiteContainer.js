import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Check current page and render component
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  // function to display footer component
  const renderFooter = () => {
    return <Footer />;
  };

  return (
    <div>
      {/* pass currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* renderPage and renderFooter to always surface those components  */}
      {renderPage()}
      {renderFooter()}
    </div>
  );
}
