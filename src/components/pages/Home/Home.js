import React from "react";
import "/Users/mrao/Code/react-portfolio/src/App.css";
import skatevid from "/Users/mrao/Code/react-portfolio/src/assets/videos/skatevid.mp4";

function Home({ currentPage, handlePageChange }) {
  return (
    <div>
      <header className="height-100">
        <div className="overlay"></div>
        <video autoPlay={true} muted={true} loop={true}>
          <source src={skatevid} type="video/mp4" />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-1 major-mono">Michael Rao</h1>
              <h2 className="major-mono">Full Stack Web Developer</h2>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
