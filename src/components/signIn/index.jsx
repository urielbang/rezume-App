import Form from "react-bootstrap/Form";
export default function SignIn({
  handleClick,
  handleSignIn,
  handelEmailChange,
  handelPasswordChange,
}) {
  return (
    <div className="containerForm">
      <h1>Sign In</h1>
      <Form onSubmit={handleSignIn} className="FormSignIn">
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
          <button onClick={handleClick}>have an account?</button>
          <button type="submit">Sign in</button>
        </div>
      </Form>
    </div>
  );
}
