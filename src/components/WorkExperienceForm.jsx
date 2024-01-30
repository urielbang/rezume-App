import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
export default function WorkExperienceForm() {
  return (
    <>
      <Form.Label>Work Experience</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Company name</InputGroup.Text>
        <Form.Control
          placeholder="Company"
          aria-label="Username"
          name={`workExperienceComanyName`}
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Role</InputGroup.Text>
        <Form.Control
          placeholder="Role"
          aria-label="Username"
          name={`workExperienceRole`}
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Time frame</InputGroup.Text>
        <Form.Control
          placeholder="Time frame"
          aria-label="Username"
          name={`workExperienceTime`}
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </>
  );
}
