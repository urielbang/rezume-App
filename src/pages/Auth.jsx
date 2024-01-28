import SignIn from "../components/signIn";
import Login from "../components/login";
import { useState } from "react";
import { auth } from "../config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Auth() {
  const [toglleLogin, setToggleLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setToggleLogin(!toglleLogin);
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredintal) => {
        const user = userCredintal.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        log(errorCode, errorMessage);
      });

    e.target[0].value = "";
    e.target[1].value = "";
  };
  const handelEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handelPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredintal) => {
        const user = userCredintal.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    e.target[0].value = "";
    e.target[1].value = "";
  };

  return (
    <div>
      {toglleLogin ? (
        <SignIn
          handleClick={handleClick}
          handleSignIn={handleSignIn}
          handelEmailChange={handelEmailChange}
          handelPasswordChange={handelPasswordChange}
        />
      ) : (
        <Login
          handleClick={handleClick}
          handelPasswordChange={handelPasswordChange}
          handelEmailChange={handelEmailChange}
          handleLogin={handleLogin}
        />
      )}
    </div>
  );
}
