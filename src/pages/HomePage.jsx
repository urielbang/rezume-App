import { Link } from "react-router-dom";
import img from "../assets/join-us.png";
export default function HomePage() {
  return (
    <div className="containerHomePage">
      <div className="cardHomeLeft">
        <p>
          Resume Builder (and CV Formate) Create Dream and Aspirations for a
          Better Job
        </p>
        <span>
          user-friendly mobile application designed to help individuals create
          professional resumes effortlessly
        </span>
        <div className="homePageLink">
          <Link to="/resumeapp">Build Resume for Free</Link>
        </div>
      </div>
      <div className="cardHomeRight">
        <img className="picCoverHome" src={img} />
      </div>
    </div>
  );
}
