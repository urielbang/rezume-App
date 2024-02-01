import { useState } from "react";
import img from "../../assets/user-3296.svg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { SiWebtrees } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5, FaCss3 } from "react-icons/fa6";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function CardResumeTheard({ currentResume }) {
  const [loader, setLoader] = useState(false);

  const downLoadPdf = async () => {
    try {
      setLoader(true);
      const capture = document.querySelector(".cardFullResumeTherd");

      if (!capture) {
        throw new Error("Cannot find element with class .cardFullResume");
      }

      capture.style.width = "100vh";
      capture.style.height = "100vh";

      const canvas = await html2canvas(capture);

      // Create PDF
      const doc = new jsPDF("p", "mm", "a4");
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = doc.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      doc.save("resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
    setLoader(false);
  };
  return (
    <>
      <div className="cardFullResumeTherd">
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
            doloremque, soluta culpa omnis numquam praesentium eum fuga tempore!
            Nostrum beatae ex doloremque totam praesentium! Velit, asperiores.
            Hic exercitationem placeat reprehenderit.
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
  );
}
