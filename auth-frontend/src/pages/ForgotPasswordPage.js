import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ForgotPasswordPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const onSubmitClicked = async () => {
    try {
      await axios.put(`/api/forgot-password/${emailValue}`);
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return success ? (
    <div className="content-container">
      <h1>Success</h1>
      <p>Check your email for a reset link</p>
    </div>
  ) : (
    <div className="content-container">
      <h1>Forgot Password</h1>
      <p>Enter your email and we'll send you a reset link</p>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        placeholder="abc@example.com"
      />
      <button disabled={!emailValue} onClick={onSubmitClicked}>
        Send Reset link
      </button>
    </div>
  );
};
