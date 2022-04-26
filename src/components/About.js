import React from "react";
import aboutimage from "../images/about.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENT</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, omnis
          tempora? Nemo modi eligendi animi voluptatem? Rerum maiores pariatur
          numquam quibusdam est iusto hic vel rem.
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
    </div>
  );
};

export default About;
