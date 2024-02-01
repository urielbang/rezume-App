import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User";

import imgTamplate1 from "../assets/divorce.png";
import imgTamplate2 from "../assets/certificate.png";
import imgTamplate3 from "../assets/divorce (1).png";

export default function CardResume({ currentResume }) {
  const { user } = useContext(UserContext);

  return (
    <>
      {currentResume.email !== undefined || user !== undefined ? (
        <>
          <h1>Choose one of tamplates</h1>

          <div className="tamplates">
            <Link to={"/firstTamplate"}>
              <img src={imgTamplate1}></img>
            </Link>
            <Link to={"/secondTamplate"}>
              <img src={imgTamplate2} />
            </Link>
            <Link to={"/theardTamplate"}>
              <img src={imgTamplate3}></img>
            </Link>
          </div>
        </>
      ) : (
        <div className="containerNoteResume">
          <h1 className="headerNotYetResume">
            You have not write your Resume yet click here to start{" "}
            <Link to={"/resumeapp"}>Resume App</Link>
          </h1>
        </div>
      )}
    </>
  );
}
