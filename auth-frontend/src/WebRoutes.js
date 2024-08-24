import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserInfoPage } from "./pages/UserInfoPage";
import { LogInPage } from "./pages/LogInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { PrivateRoute } from "./auth/PrivateRoute";
import { VerifyEmailPage } from "./pages/VerifyEmailPage";
import { EmailVerificationPage } from "./pages/EmailVerificationPage";
import { EmailVerificationCodePage } from "./pages/EmailVerificationCodePage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { PasswordResetPage } from "./pages/PasswordResetPage";

export const WebRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<UserInfoPage />} />
        </Route>
        <Route
          path="/verify-email"
          element={<EmailVerificationCodePage />}
          exact
        />
        <Route
          path="/verify-email/:verificationString"
          element={<EmailVerificationPage />}
        />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/please-verify" element={<VerifyEmailPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<PasswordResetPage />} />
      </Routes>
    </Router>
  );
};
