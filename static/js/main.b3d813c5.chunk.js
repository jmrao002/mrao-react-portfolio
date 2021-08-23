(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(6),s=a.n(c),r=a(2),i=a(0);var o=function(e){var t=e.currentPage,a=e.handlePageChange;return Object(i.jsx)("div",{children:Object(i.jsx)("div",{children:Object(i.jsxs)("ul",{className:"nav nav-tabs",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"#home",onClick:function(){return a("Home")},className:"Home"===t?"nav-link active":"nav-link",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"#about",onClick:function(){return a("About")},className:"About"===t?"nav-link active":"nav-link",children:"About"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"#portfolio",onClick:function(){return a("Portfolio")},className:"Portfolio"===t?"nav-link active":"nav-link",children:"Portfolio"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"#contact",onClick:function(){return a("Contact")},className:"Contact"===t?"nav-link active":"nav-link",children:"Contact"})})]})})})},l=(a(13),a.p+"static/media/skatevid.57384c8b.mp4");var d=function(e){return e.currentPage,e.handlePageChange,Object(i.jsx)("div",{children:Object(i.jsxs)("header",{className:"height-100",children:[Object(i.jsx)("div",{className:"overlay"}),Object(i.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:Object(i.jsx)("source",{src:l,type:"video/mp4"})}),Object(i.jsx)("div",{className:"container h-100",children:Object(i.jsx)("div",{className:"d-flex h-100 text-center align-items-center",children:Object(i.jsxs)("div",{className:"w-100 text-white",children:[Object(i.jsx)("h1",{className:"display-1 major-mono",children:"Michael Rao"}),Object(i.jsx)("h2",{className:"major-mono",children:"Full Stack Web Developer"})]})})})]})})},m=a.p+"static/media/headshot.69788ad7.jpg";function h(){return Object(i.jsx)("div",{id:"about-me",className:"container-fluid",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{id:"image",className:"col-md-4 text-center",children:Object(i.jsx)("img",{className:"img-fluid",src:m,alt:"headshot"})}),Object(i.jsxs)("div",{id:"about-me",className:"col-md-6",children:[Object(i.jsx)("h1",{className:"major-mono bcg-yellow",children:"About M Rao"}),Object(i.jsx)("hr",{}),Object(i.jsx)("p",{children:"I am a lifelong learner and technical sales professional, with experience partnering with many of the world's largest organizations. I thrive in high-pressure sales environments and can communicate complex technical concepts to any audience."}),Object(i.jsx)("p",{children:"Currently, I am attending Northwestern University to learn the skills of a full-stack developer. The program cover HTML, CSS, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command Line, Git, and more."}),Object(i.jsx)("p",{children:"In my free time, I enjoy rock climbing, playing and watching soccer, music, reading, and spending time with friends and family."})]})]})})}var j=function(e){return Object(i.jsxs)("div",{className:"card border-dark m-4",children:[Object(i.jsx)("h3",{className:"card-title",children:e.name}),Object(i.jsx)("p",{className:"card-text",children:e.description}),Object(i.jsx)("div",{className:"card-body",children:Object(i.jsx)("img",{src:e.screenshot,className:"card-img-top",alt:"project screenshot"})}),Object(i.jsxs)("div",{className:"card-footer text-center",children:[Object(i.jsx)("a",{href:e.deployment,rel:"noreferrer",target:"_blank",className:"btn btn-warning",children:"Live App"}),Object(i.jsx)("hr",{}),Object(i.jsx)("a",{href:e.github,rel:"noreferrer",target:"_blank",class:"btn btn-warning",children:"GitHub Repo"})]})]})},b=a(7);function u(e){return Object(i.jsx)("div",{className:"wrapper d-flex flex-wrap",children:e.children})}var p=function(){return Object(i.jsx)("div",{className:"container-fluid",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)(u,{children:b.map((function(e){return Object(i.jsx)(j,{screenshot:e.screenshot,name:e.name,github:e.github,deployment:e.deployment,description:e.description},e.id)}))})})})},x=a(3),g=a(5);var O=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(r.a)(s,2),l=o[0],d=o[1],m=a.name,h=a.email,j=a.message;function b(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);d(t?"":"Please enter a valid email address!")}else e.target.value.length?d(""):d("".concat(e.target.name," is required."));l||c(Object(g.a)(Object(g.a)({},a),{},Object(x.a)({},e.target.name,e.target.value)))}return Object(i.jsx)("section",{className:"container",children:Object(i.jsxs)("form",{className:"justify-content-center",id:"contact-form",children:[Object(i.jsxs)("div",{className:"mt-5",children:[Object(i.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(i.jsx)("input",{className:"form-control",type:"text",name:"name",defaultValue:m,onBlur:b})]}),Object(i.jsxs)("div",{className:"mt-5",children:[Object(i.jsx)("label",{htmlFor:"email",children:"Email Address:"}),Object(i.jsx)("input",{className:"form-control",type:"email",name:"email",defaultValue:h,onBlur:b})]}),Object(i.jsxs)("div",{className:"mt-5",children:[Object(i.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(i.jsx)("textarea",{className:"form-control",name:"message",defaultValue:j,onBlur:b,rows:"7"})]}),l&&Object(i.jsx)("div",{children:Object(i.jsx)("p",{className:"error-text",children:l})}),Object(i.jsx)("div",{className:"mt-5 mb-5",children:Object(i.jsx)("button",{className:"btn btn-outline-dark ",type:"submit",children:"Submit"})})]})})},f=a.p+"static/media/MRao Resume.5583cc1a.pdf";var v=function(){return Object(i.jsxs)("footer",{className:"d-flex justify-content-center bg-light fixed-bottom border border-dark",children:[Object(i.jsx)("div",{className:"mx-4",children:Object(i.jsx)("a",{href:"https://github.com/jmrao002",rel:"noreferrer",target:"_blank",children:Object(i.jsx)("img",{src:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-48.png",alt:"Github"})})}),Object(i.jsx)("div",{className:"mx-4",children:Object(i.jsx)("a",{href:"https://www.linkedin.com/in/jmrao002/",rel:"noreferrer",target:"_blank",children:Object(i.jsx)("img",{src:"https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-48.png",alt:"LinkedIn"})})}),Object(i.jsx)("div",{className:"mx-4",children:Object(i.jsx)("a",{href:f,download:!0,rel:"noreferrer",target:"_blank",children:Object(i.jsx)("img",{src:"https://cdn2.iconfinder.com/data/icons/business-and-finance-388/30/resume_business_cv_work_job_curriculum-_19-48.png",alt:"Resume"})})})]})};function N(){var e=Object(n.useState)("Home"),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(o,{currentPage:a,handlePageChange:function(e){return c(e)}}),"Home"===a?Object(i.jsx)(d,{}):"About"===a?Object(i.jsx)(h,{}):"Portfolio"===a?Object(i.jsx)(p,{}):"Contact"===a?Object(i.jsx)(O,{}):void 0,Object(i.jsx)(v,{})]})}var y=function(){return Object(i.jsx)(N,{})};a(14);s.a.render(Object(i.jsx)(y,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"id":1,"name":"Progressive Budget","screenshot":"https://raw.githubusercontent.com/jmrao002/progressiveBudget/main/public/assets/screenShot.png","github":"https://github.com/jmrao002/progressiveBudget","deployment":"https://peaceful-atoll-01297.herokuapp.com/","description":"Add expenses and deposits to your budget, with or without an internet connection."},{"id":2,"name":"Fitness Tracker","screenshot":"","github":"https://github.com/jmrao002/fitnessTracker","deployment":"https://thawing-anchorage-63956.herokuapp.com/","description":"Enter and track workouts."},{"id":3,"name":"Tech Blog","screenshot":"","github":"https://github.com/jmrao002/techBlog","deploy":"https://mrao-tech-blog.herokuapp.com/","description":"Use this blog to write about tech."},{"id":4,"name":"Weather Dashboard","screenshot":"https://raw.githubusercontent.com/jmrao002/weatherdash/main/assets/images/screenShot.png","github":"https://github.com/jmrao002/weatherdash","deployment":"https://jmrao002.github.io/weatherdash","description":"See today\'s weather and a 5-day forecast for a specified city."},{"id":5,"name":"Day Planner","screenshot":"https://raw.githubusercontent.com/jmrao002/day-planner/main/assets/images/screenshot.png","github":"https://github.com/jmrao002/day-planner","deployment":"https://jmrao002.github.io/day-planner","description":"nter and save events for each hour of the day."},{"id":6,"name":"Expense Tracker","screenshot":"","github":"https://github.com/Team6Proj2/Proj2","deployment":"https://accountability-team6.herokuapp.com/","description":"Enter and track expenses for yourself and your team."}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.b3d813c5.chunk.js.map