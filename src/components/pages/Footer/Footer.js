import React from "react";

function Footer() {
  return (
    <footer className="d-flex align-items-center justify-content-center bg-light fixed-bottom border border-dark">
      <a href="https://github.com/jmrao002" rel="noreferrer" target="_blank">
        <img
          src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-64.png"
          alt="Github"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/jmrao002/"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-64.png"
          alt="LinkedIn"
        />
      </a>
      {/* Need to figure out how to access document for download. Alternative option is to store it online somewhere. */}
      <a
        href="/Users/mrao/Code/react-portfolio/src/assets/docs/MRao Resume.pdf"
        download
        rel="noreferrer"
        target="_blank"
      >
        <img
          src="https://cdn2.iconfinder.com/data/icons/business-and-finance-388/30/resume_business_cv_work_job_curriculum-_19-64.png"
          alt="Resume"
        />
      </a>
    </footer>
  );
}

export default Footer;
