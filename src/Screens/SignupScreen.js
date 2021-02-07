import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "./signupScreen.css";

const SignupScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn} className="signin_btn">
          Sign In
        </button>
        <h4>
          <span className="signupScreen_gray">New to Netflix?</span>{" "}
          <Link to="test">
            <span className="signupScreen_link" onClick={register}>
              Sign up now.
            </span>
          </Link>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
