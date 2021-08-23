import React from "react";
import "/Users/mrao/Code/react-portfolio/src/App.css";
import skatevid from "/Users/mrao/Code/react-portfolio/src/assets/videos/skatevid.mp4";

export default function Home() {
  return (
    <div>
      <header id="intro" className="height-100">
        <div className="overlay"></div>
        <video autoPlay={true} muted={true} loop={true}>
          <source src={skatevid} type="video/mp4" />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-1 major-mono">M Rao</h1>
              <h2 className="display-4 major-mono">Portfolio</h2>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
