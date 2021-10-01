import React, { useState } from "react";

const ContactMe = () => {
  const [link] = useState([
    {
      classname: "fab fa-github",
      link: "https://github.com/renzellaira",
      title: "Github"
    },
    {
      classname: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/in/renzell-aira-escusa-46445111b/",
      title: "LinkedIn"
    },

    {
      classname: "fab fa-google",
      link: "mailto:renzell.aira@gmail.com",
      title: "Gmail"
    }
  ]);

  return (
    <React.Fragment>
      <div className="bg-contact " id="contact">
        <div className="bg-1 text-center container py-5">
          <h1 className="section-header works-header">Contact Me</h1>
          <div className="d-flex justify-content-center align-items-center">
            {link.map((link, index) => (
              <div key={index + 1} className="px-4">
                <a href={link.link} target="blank" title={link.title}>
                  <i className={link.classname} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactMe;
