import Form from "react-bootstrap/Form";
export default function Login({
  handleClick,
  handleLogin,
  handelPasswordChange,
  handelEmailChange,
}) {
  return (
    <div className="containerForm">
      <h1>Login</h1>
      <Form onSubmit={handleLogin} className="FormSignIn">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handelEmailChange}
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={handelPasswordChange} type="password" />
        </Form.Group>
        <div>
          <button onClick={handleClick}>Create an account </button>
          <button type="submit">login</button>
        </div>
      </Form>
    </div>
  );
}
