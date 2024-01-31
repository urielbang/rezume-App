import { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../assets/reshot-icon-resume-XTALQHGEVC.svg";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User";

export default function NavBar() {
  const { user } = useContext(UserContext);
  const auth = getAuth();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar className="navBar">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img className="iconNavBar" src={img} alt="" />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle />
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resumeapp">Resume Builder</Link>
          </li>
          <li>
            <Link to="/resumes">Resumes</Link>
          </li>
          <li>
            <Link to="/auth">Auth</Link>
          </li>
        </ul>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            loged in as:{" "}
            <a className="logInMail">
              {user ? user.email : "not logged"}
              {user ? <p onClick={handleSignOut}>log out</p> : ""}
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
