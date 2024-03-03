import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import db from "../config";
import EducationForm from "../components/EducationForm";
import WorkExperienceForm from "../components/WorkExperienceForm";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../assets/reshot-icon-resume-XTALQHGEVC.svg";

import InputGroup from "react-bootstrap/InputGroup";
export default function ResumeBuilder() {
  const [resumeFromUsr, setResumeFromUsr] = useState({});
  const [allDataResume, setAllDataResume] = useState({});

  const [education, setEducation] = useState({});
  const [arrDataEducation, setArrDataEducation] = useState([]);

  const [workExperience, setWorkExperience] = useState({});
  const [arrDataWorkExperience, setarrDataWorkExperience] = useState([]);

  const [workExperienceElements, setworkExperienceElements] = useState([]);

  const [educationElements, setEducationElements] = useState([]);

  const [togglePost, setTogglePost] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;

  const handleChangeEducation = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };
  const handleChangeworkExperience = (e) => {
    setWorkExperience({ ...workExperience, [e.target.name]: e.target.value });
  };
  const handlChange = (e) => {
    if (
      !(
        e.target.name.startsWith("workExperience") ||
        e.target.name.startsWith("education")
      )
    ) {
      setResumeFromUsr({ ...resumeFromUsr, [e.target.name]: e.target.value });
    }
  };

  //! submit
  const handleSubmit = (e) => {
    //! set the object of the resume
    e.preventDefault();

    setarrDataWorkExperience([...arrDataWorkExperience, { ...workExperience }]);

    setArrDataEducation([...arrDataEducation, { ...education }]);

    setAllDataResume({
      ...allDataResume,
      ...resumeFromUsr,
      workExperience: arrDataWorkExperience,
      education: arrDataEducation,
    });
    setTogglePost(!togglePost);

    // posDataFirebase();
    //!clear inputs

    Object.values(e.target).forEach((input) => {
      input.value = "";
    });

    // //! delete All inputs
    // const inputs = Object.values(e.target);
    // inputs.forEach((input) => {
    //   input.value = "";
    // });
  };
  const posDataFirebase = async () => {
    if (user) {
      const collectionRef = collection(db, "ResumeData");
      const payload = {
        ...allDataResume,
        ...resumeFromUsr,
        workExperience: arrDataWorkExperience,
        education: arrDataEducation,
      };
      await addDoc(collectionRef, { ...payload, userId: user.uid });
    }
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    setarrDataWorkExperience([...arrDataWorkExperience, { ...workExperience }]);

    setworkExperienceElements([
      ...workExperienceElements,
      <WorkExperienceForm setWorkExperience={setWorkExperience} />,
    ]);
  };

  const handleAddEducation = (e) => {
    e.preventDefault();
    setArrDataEducation([...arrDataEducation, { ...education }]);

    setEducationElements([
      ...educationElements,
      <EducationForm setEducation={setEducation} />,
    ]);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (togglePost) {
      posDataFirebase();
    }
  }, [togglePost]);

  return (
    <div className="container-resume-builder">
      <div data-aos="fade-right" className="containeResume">
        <h1 className="headingResume">Resume Form!</h1>
        <form onSubmit={handleSubmit} className="formContainer">
          <InputGroup onChange={handlChange} className="mb-3">
            <InputGroup.Text id="basic-addon1">Full name</InputGroup.Text>
            <Form.Control
              name="fullName"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup onChange={handlChange}>
            <InputGroup.Text>About me</InputGroup.Text>
            <Form.Control
              name="about"
              as="textarea"
              aria-label="With textarea"
              placeholder="tell us about yourself"
            />
          </InputGroup>
          <InputGroup onChange={handlChange} className="mb-3">
            <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
            <Form.Control
              name="phone"
              placeholder="052*******"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup onChange={handlChange} className="mb-3">
            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            <Form.Control
              name="email"
              placeholder="Example@gmail.com"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Form.Label>Work Experience</Form.Label>
          <InputGroup onChange={handleChangeworkExperience} className="mb-3">
            <InputGroup.Text id="basic-addon1">Company name</InputGroup.Text>
            <Form.Control
              placeholder="Company"
              aria-label="Username"
              name="workExperienceComanyName"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup onChange={handleChangeworkExperience} className="mb-3">
            <InputGroup.Text id="basic-addon1">Role</InputGroup.Text>
            <Form.Control
              placeholder="Role"
              aria-label="Username"
              name="workExperienceRole"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup onChange={handleChangeworkExperience} className="mb-3">
            <InputGroup.Text id="basic-addon1">Time frame</InputGroup.Text>
            <Form.Control
              placeholder="Time frame"
              aria-label="Username"
              name="workExperienceTime"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          {workExperienceElements}
          <div className="buttonContainer">
            <a onClick={handleAddExperience} className="button" id="button">
              add Education
            </a>
          </div>

          <Form.Label>Education</Form.Label>
          <InputGroup onChange={handleChangeEducation} className="mb-3">
            <InputGroup.Text id="basic-addon1">Year</InputGroup.Text>
            <Form.Control
              name="educationYear"
              placeholder="2018"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Form.Select
            onChange={handleChangeEducation}
            name="educationType"
            aria-label="Default select example"
          >
            <option>type study</option>
            <option value="course">course</option>
            <option value="maturity">maturity</option>
            <option value="Degree">Degree</option>
          </Form.Select>

          <InputGroup onChange={handleChangeEducation} className="mb-3">
            <InputGroup.Text id="basic-addon1">school name</InputGroup.Text>
            <Form.Control
              name="educationSchoolName"
              placeholder="ben gurion uneversity"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          {educationElements}

          <div className="buttonContainer">
            <a onClick={handleAddEducation} className="button" id="button">
              add Education
            </a>
          </div>

          <div className="buttonContainer">
            <button className="button-5" type="submit">
              Send CV
            </button>
          </div>
        </form>
      </div>
      <div data-aos="fade-left" className="picResumeBuilder">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
