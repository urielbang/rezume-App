import { useContext, useState } from "react";
import { UserContext } from "../context/User";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import img from "../assets/user-3296.svg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { SiWebtrees } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5, FaCss3 } from "react-icons/fa6";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";

export default function CardResume({ currentResume }) {
  const { user } = useContext(UserContext);

  const [loader, setLoader] = useState(false);

  const downLoadPdf = () => {
    const capture = document.querySelector(".containerCard");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHieght = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHieght);
      setLoader(false);
      doc.save("Resume CV.pdf");
    });
  };

  return (
    <>
      {user ? (
        <>
          <div className="containerCard">
            <div className="resumeLeft">
              <img src={img}></img>
              <p>ABOUT ME</p>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                voluptates rerum debitis quasi repellat voluptate? Enim mollitia
                aspernatur possimus obcaecati in tenetur, officia, blanditiis
                dolorem recusandae quas maiores suscipit dignissimos.
              </p>

              <p>CONTACT</p>

              <ul>
                <li>
                  <BsFillTelephoneFill /> +972 53697639
                </li>
                <li>
                  <BiSolidMessageAltDetail /> {currentResume.email}
                </li>
                <li>
                  <SiWebtrees /> www.urielBang.io
                </li>
                <li>
                  <FaMapMarkerAlt />
                  Steet 212 City, Israel
                </li>
              </ul>
              <p>PERSONAL SKILLS</p>
              <ul>
                <li>
                  <FaReact /> React
                </li>
                <li>
                  <FaHtml5 /> HTML
                </li>
                <li>
                  {" "}
                  <FaCss3 /> CSS
                </li>
                <li>
                  {" "}
                  <AiOutlineConsoleSql /> SQL
                </li>
                <li>
                  {" "}
                  <SiJavascript />
                  Javascript
                </li>
              </ul>
            </div>

            <div className="resumeRight">
              <h1>{currentResume.fullName}</h1>
              <span>SENIOR ACCOUNTANT</span>
              <p>PROFESIONAL PROFILE</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                doloremque, soluta culpa omnis numquam praesentium eum fuga
                tempore! Nostrum beatae ex doloremque totam praesentium! Velit,
                asperiores. Hic exercitationem placeat reprehenderit.
              </p>
              <h3>EDUCATION</h3>
              {currentResume.education?.map((educItem, index) => {
                return (
                  <ul key={index}>
                    <li>{`year: ${educItem.educationYear}`}</li>
                    <li>{`Type Learning: ${educItem.educationType}`}</li>
                    <li>{`School name: ${educItem.educationSchoolName}`}</li>
                  </ul>
                );
              })}
              <h3>Work EXPERIENCE</h3>
              {currentResume.workExperience?.map((workItem, index) => {
                return (
                  <ul key={index}>
                    <li>{`Company name: ${workItem.workExperienceComanyName}`}</li>
                    <li>{`Role: ${workItem.workExperienceRole}`}</li>
                    <li>{`Year: ${workItem.workExperienceTime}`}</li>
                  </ul>
                );
              })}
            </div>
          </div>

          <button onClick={downLoadPdf} disabled={!(loader === false)}>
            {loader ? <span>Downloading</span> : <span>Download</span>}
          </button>
        </>
      ) : (
        ""
      )}
    </>
  );
}
