import React from "react";

export default function About() {
  return (
    <div id="about-me" className="container-fluid">
      <div className="row">
        {/* <!-- headshot --> */}
        <div id="image" className="col-md-4 text-center">
          <img
            className="img-fluid"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFj8H2TKKQ9MQ/profile-displayphoto-shrink_200_200/0/1590170979753?e=1635379200&v=beta&t=vMcxKtsGIssKNeoPvp7kIefuSK9G0-e7_C-0texnDeo"
            alt="headshot"
          ></img>
        </div>
        {/* <!-- About Me --> */}
        <div id="about-me" className="col-md-6">
          <h1 className="major-mono bcg-yellow">About M Rao</h1>
          <hr />
          <p>
            I am a lifelong learner and technical sales professional, with
            experience partnering with many of the world's largest
            organizations. I thrive in high-pressure sales environments and can
            communicate complex technical concepts to any audience.
          </p>
          <p>
            Currently, I am attending Northwestern University to learn the
            skills of a full-stack developer. The program cover HTML, CSS,
            JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js,
            Database Theory, MongoDB, MySQL, Command Line, Git, and more.
          </p>
          <p>
            In my free time, I enjoy rock climbing, playing and watching soccer,
            music, reading, and spending time with friends and family.
          </p>
        </div>
      </div>
    </div>
  );
}
