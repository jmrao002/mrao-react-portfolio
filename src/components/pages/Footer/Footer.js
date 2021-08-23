import React from "react";
import resume from "/Users/mrao/Code/react-portfolio/src/assets/docs/MRao Resume.pdf";

function Footer() {
  return (
    <footer className="d-flex justify-content-center bg-light fixed-bottom border border-dark">
      <div className="mx-4">
        <a href="https://github.com/jmrao002" rel="noreferrer" target="_blank">
          <img
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-48.png"
            alt="Github"
          />
        </a>
      </div>
      <div className="mx-4">
        <a
          href="https://www.linkedin.com/in/jmrao002/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-48.png"
            alt="LinkedIn"
          />
        </a>
      </div>
      <div className="mx-4">
        <a href={resume} download rel="noreferrer" target="_blank">
          <img
            src="https://cdn2.iconfinder.com/data/icons/business-and-finance-388/30/resume_business_cv_work_job_curriculum-_19-48.png"
            alt="Resume"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
