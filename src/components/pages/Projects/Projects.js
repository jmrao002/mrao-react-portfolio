import React from "react";

// Individual Project Cards
function Projects(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.screenshot} />
      </div>
      <div className="content">
        <p className="card-title">{props.name}</p>
        <p class="proj-icons-container">
          <a href={props.github}>
            <img
              class="project-icon"
              src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-48.png"
              target="_blank"
              alt="GitHub Repo"
            />
          </a>
          <a href={props.deployment}>
            <img
              class="project-icon"
              src="https://cdn0.iconfinder.com/data/icons/customicondesignoffice5/48/go-into.png"
              target="_blank"
              alt="Live Project"
            />
          </a>
        </p>
        <p class="description">{props.description}</p>
      </div>
    </div>
  );
}

export default Projects;
