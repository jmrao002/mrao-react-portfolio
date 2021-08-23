import React from "react";
import Projects from "/Users/mrao/Code/react-portfolio/src/components/pages/Projects/Projects.js";
import portfolio from "/Users/mrao/Code/react-portfolio/src/projectData.json";

function Wrapper(props) {
  return (
    <div className="wrapper d-flex flex-wrap">
      {props.children}
    </div>
  );
}

function Portfolio() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Wrapper>
          {portfolio.map((project) => (
            <Projects
              key={project.id}
              screenshot={project.screenshot}
              name={project.name}
              github={project.github}
              deployment={project.deployment}
              description={project.description}
            />
          ))}
        </Wrapper>
      </div>
    </div>
  );
}

export default Portfolio;
