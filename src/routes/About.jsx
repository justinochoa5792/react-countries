import React from "react";

const About = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">About This Website</h1>
        <p className="paragraph">
          This website uses the{" "}
          <span className="highlight">REST Countries API</span> to display
          comprehensive information about countries from around the world.
        </p>
        <p className="paragraph paragraph-lg">
          Explore our data to learn about country names, capitals, regions,
          populations, flags, and much more. Whether you’re curious about a
          particular country or looking for insights about global regions, our
          interactive explorer makes it easy.
        </p>
        <p className="paragraph paragraph-lg">
          Our goal is to build a fully responsive and modern web application
          using the latest technologies, including React Router v7 for seamless
          routing and Tailwind CSS for a beautiful, responsive user interface.
        </p>
      </div>
    </div>
  );
};

export default About;
