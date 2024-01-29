import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../assets/reshot-icon-resume-XTALQHGEVC.svg";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";

export default function NavBar({ isLoged }) {
  const auth = getAuth();
  const user = auth.currentUser;

  const handleClickLoged = () => {};

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
            <a onClick={handleClickLoged} className="logInMail">
              {isLoged ? user.email : "not logged"}
              <p>log out</p>
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
