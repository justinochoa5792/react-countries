import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div class="page-wrapper">
      <div class="container">
        <div class="flex-wrap-container">
          <div class="column-half column-half-md">
            <div class="spacing-container spacing-container-lg">
              <h1 class="heading heading-sm">
                <span class="block">Explore Countries with </span>
                <span class="heading-highlight block">Real-Time Data</span>
              </h1>
              <p class="text text-lg">
                Discover details about every country around the world – from
                capitals to regions!
              </p>
              <div class="button-group button-group-sm button-group-sm-space-x">
                <Link to="/countries" class="button-primary">
                  Explore Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <Link to="/about" class="button-secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div class="column-half column-half-md">
            <div class="image-container">
              <img
                src="https://image.winudf.com/v2/image/Ymx1ZWNhcC5pbWFnZXouYmVhdXRpZnVsX2NvdW50cmllc193YWxscGFwZXJzX3NjcmVlbl8wXzlpMW14OWl1/screen-0.webp?fakeurl=1&type=.webp"
                alt="Explore countries"
                class="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
