import { useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";
import { useRef } from "react";
import "../styles/main.css";
import { BiUserCheck } from "react-icons/bi";

import img from "../assets/resume.png";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User";

export default function NavBar() {
  const navRef = useRef();

  const { user } = useContext(UserContext);
  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="navBarContainer">
      <div className="logo">
        <Link to="/">
          <img className="iconNavBar" src={img} alt="" />
        </Link>
      </div>
      <nav ref={navRef}>
        <Link to="/">Home</Link>

        <Link to="/resumeapp">Resume Builder</Link>

        <Link to="/resumes">Resumes</Link>

        <Link to="/auth">Auth</Link>
        <a id="logInMail">
          {user ? (
            <span className="mailLoged">
              {user.email}
              {<BiUserCheck className="conectedIcon" />}
            </span>
          ) : (
            "not logged"
          )}
          {user ? (
            <span className="logOutButton" onClick={handleSignOut}>
              log out
            </span>
          ) : (
            ""
          )}
        </a>
      </nav>

      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}
