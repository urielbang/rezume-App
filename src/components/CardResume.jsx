import { useContext, useState } from "react";
import { UserContext } from "../context/User";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default function CardResume({ currentResume }) {
  const { user } = useContext(UserContext);

  const [loader, setLoader] = useState(false);

  const downLoadPdf = () => {
    const capture = document.querySelector(".actual-receipt");
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
          <div className="actual-receipt">
            <p>{`full name: ${currentResume.fullName}`}</p>
            <p>{`Email: ${currentResume.email}`}</p>
            <p>{`Phone: ${currentResume.phone}`}</p>
            <h3>Education</h3>
            {currentResume.education?.map((educItem, index) => {
              return (
                <ul key={index}>
                  <li>{`year: ${educItem.educationYear}`}</li>
                  <li>{`Type Learning: ${educItem.educationType}`}</li>
                  <li>{`School name: ${educItem.educationSchoolName}`}</li>
                </ul>
              );
            })}
            <h3>Work Experience</h3>
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
