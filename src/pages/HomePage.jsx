import { Link } from "react-router-dom";

import img from "../assets/join-us.png";
import imgBackground from "../assets/pattern.svg";
import Spline from "@splinetool/react-spline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="containerHomePage">
      <div className="cardHomeLeft">
        <p data-aos="fade-right">
          Resume Builder (and CV Formate) Create Dream and Aspirations for a
          Better Job
        </p>
        <span data-aos="fade-right">
          user-friendly mobile application designed to help individuals create
          professional resumes effortlessly
        </span>
        <div data-aos="fade-right" className="homePageLink">
          <Link to="/resumeapp">Build Resume for Free</Link>
        </div>
      </div>
      <div data-aos="fade-left" className="cardHomeRight">
        <img className="picCoverHome" src={img} />
      </div>
    </div>
  );
}
