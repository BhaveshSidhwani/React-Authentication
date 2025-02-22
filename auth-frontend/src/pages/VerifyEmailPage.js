import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const VerifyEmailPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);

  return (
    <div className="content-container">
      <h1>Thanks for Signing Up!</h1>
      <p>
        A verification email has been sent to the email address. Please verify
        your email to unlock all features.
      </p>
    </div>
  );
};
