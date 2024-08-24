import { useNavigate } from "react-router-dom";

export const EmailVerificationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="content-container">
      <h1>Success!</h1>
      <p>Thanks for verifying your email! Now you can access all features!</p>
      <button onClick={() => navigate("/")}>Go to Home Page</button>
    </div>
  );
};
