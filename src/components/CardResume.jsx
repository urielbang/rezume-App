import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User";
import AOS from "aos";
import "aos/dist/aos.css";

import imgTamplate1 from "../assets/divorce.png";
import imgTamplate2 from "../assets/certificate.png";
import imgTamplate3 from "../assets/divorce (1).png";

export default function CardResume({ currentResume }) {
  const { user } = useContext(UserContext);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {currentResume.name ? (
        <>
          <h1 data-aos="fade-down">Choose one of tamplates</h1>

          <div className="tamplates">
            <Link data-aos="fade-up" to={"/firstTamplate"}>
              <img src={imgTamplate1}></img>
            </Link>
            <Link data-aos="fade-up" to={"/secondTamplate"}>
              <img src={imgTamplate2} />
            </Link>
            <Link data-aos="fade-up" to={"/theardTamplate"}>
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
    </div>
  );
}
