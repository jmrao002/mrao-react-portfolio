import React from "react";

// Individual Project Cards
function Projects(props) {
  return (
    <div className="card border-dark m-4">
      <h3 className="card-title">{props.name}</h3>
      <p className="card-text">{props.description}</p>
      <div className="card-body">
        <img
          src={props.screenshot}
          className="card-img-top"
          alt="project screenshot"
        />
      </div>
      <div className="card-footer text-center">
        <a
          href={props.deployment}
          rel="noreferrer"
          target="_blank"
          className="btn btn-warning"
        >
          Live App
        </a>
        <hr />
        <a
          href={props.github}
          rel="noreferrer"
          target="_blank"
          class="btn btn-warning"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

export default Projects;
