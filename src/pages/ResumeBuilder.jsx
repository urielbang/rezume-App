import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
export default function ResumeBuilder() {
  return (
    <>
      <div className="ContainerBackgroundResume"> </div>
      <div className="containeResume">
        <h1 className="headingResume">Resume Form!</h1>
        <form className="formContainer">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Full name</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>About me</InputGroup.Text>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              placeholder="tell us about yourself"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
            <Form.Control
              placeholder="052*******"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            <Form.Control
              placeholder="Example@gmail.com"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Company name</InputGroup.Text>
            <Form.Control
              placeholder="Company"
              aria-label="Username"
              name="workExperience"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Role</InputGroup.Text>
            <Form.Control
              placeholder="Role"
              aria-label="Username"
              name="workExperience"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Time frame</InputGroup.Text>
            <Form.Control
              placeholder="Time frame"
              aria-label="Username"
              name="workExperience"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>Education</InputGroup.Text>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              placeholder="tell us about your Education"
            />
          </InputGroup>

          <div className="buttonContainer">
            <button className="button-19" type="submit">
              Send CV
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
