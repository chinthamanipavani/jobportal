import React from "react";
import langing1 from "../images/langing1.png";
import accenture from "../images/accenture.png";
import amazonlogo from "../images/amazonlogo.png";
import capgemini from "../images/capgemini.png";
import cognigent from "../images/cognigent.png";
import netflixlogo from "../images/netflixlogo.png";
import spotifylogo from "../images/spotifylogo.png";
import tcslogo from "../images/tcslogo.png";
import wiprologo from "../images/wiprologo.png";
import googlelogo from "../images/googlelogo.webp";

import "./landing.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import Animated from "./Animated";
import Footer from "./Footer";
import About from "../landing2/About";
import Services from "../landing2/Services";
import Contact from "../landing2/Contact";
import Review from "../landing2/Review";
import Category from "../landing2/Category";
import { Element } from "react-scroll";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <>
      <Navbar />
      <div className="banner-container">
        <div className="banner-text">
          <h1>
            FIND YOUR <span className="highlight">DREAM JOB</span> WITH US
          </h1>
          <p>
            Good life begins with a good company — start exploring thousands of
            Jobs in one place.
          </p>
          <form>

          </form>
        </div>
        <div className="banner-image">
          <img src={langing1} alt="Banner" />
        </div>
      </div>

      {/* Company section with full browser width background */}
      <div id="companies" style={{ width: "100vw", backgroundColor: "#f0f0f0" }}>
        <div className="company-section">
          <h1 style={{color:"blue"}}>Trusted by 5000+ Companies</h1>
          <br />
          <div className="company-logos-wrapper">
            <div className="company-logos">
              {[
                spotifylogo,
                amazonlogo,
                googlelogo,
                netflixlogo,
                spotifylogo,
                accenture,
                capgemini,
                cognigent,
                tcslogo,
                wiprologo,
              ].map((logo, idx) => (
                <div key={idx}>
                  <img src={logo} alt="Company Logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-animated sections */}
      <Element name="services">
        <Services />
      </Element>
      <Element name="about">
        <About />
      </Element>

      <Element name="review">
        <Review />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};

export default Banner;
