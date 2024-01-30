import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function EducationForm({ setEducation }) {
  const [education, setNewEducation] = useState({});
  const [arrEducation, setArrEducataion] = useState({});
  const handleClick = (e) => {
    e.preventDefault();
    setArrEducataion({ ...arrEducation, ...education });
  };
  const handleChange = (e) => {
    setNewEducation({ ...education, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setEducation(arrEducation);
  }, [arrEducation]);
  return (
    <>
      <Form.Label>Education</Form.Label>
      <InputGroup onChange={handleChange} className="mb-3">
        <InputGroup.Text id="basic-addon1">Year</InputGroup.Text>
        <Form.Control
          name="educationYear"
          placeholder="2018"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <Form.Select
        onChange={handleChange}
        name="educationType"
        aria-label="Default select example"
      >
        <option>type study</option>
        <option value="course">course</option>
        <option value="maturity">maturity</option>
        <option value="Degree">Degree</option>
      </Form.Select>

      <InputGroup onChange={handleChange} className="mb-3">
        <InputGroup.Text id="basic-addon1">school name</InputGroup.Text>
        <Form.Control
          name="educationSchoolName"
          placeholder="ben gurion uneversity"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <button onClick={handleClick}>save education</button>
    </>
  );
}
