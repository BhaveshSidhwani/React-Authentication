import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";

export const SignUpPage = () => {
  const [token, setToken] = useToken();
  const [errorMessge, setErrorMessage] = useState("");

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const navigate = useNavigate();

  const onSignUpClicked = async () => {
    const response = await axios.post("/api/signup", {
      email: emailValue,
      password: passwordValue,
    });
    const { token } = response.data;
    setToken(token);
    navigate("/please-verify");
  };

  return (
    <div className="content-container">
      <h1>Sign Up</h1>

      {errorMessge && <div className="fail">{errorMessge}</div>}

      <input
        type="email"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        placeholder="Your Email"
      />
      <input
        type="password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        placeholder="Your Password"
      />
      <input
        type="password"
        value={confirmPasswordValue}
        onChange={(e) => setConfirmPasswordValue(e.target.value)}
        placeholder="Your Password"
      />

      <hr />

      <button
        disabled={
          !emailValue ||
          !passwordValue ||
          passwordValue !== confirmPasswordValue
        }
        onClick={onSignUpClicked}
      >
        Sign Up
      </button>
      <button onClick={() => navigate("/login")}>
        Already have an account? Log In
      </button>
    </div>
  );
};
