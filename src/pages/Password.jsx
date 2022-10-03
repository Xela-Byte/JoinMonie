import { useNavigate, Link } from "react-router-dom";
import {
  PasswordTC,
  ReferralText,
  SignUpBtn,
  SignUpContainer,
  SignUpForm,
  SignUpHeaderText,
  SignUpInputContainer,
} from "../styled/SignUp";
import { Line } from "../styled/UniversalStyles";

const Password = () => {
  document.title = "JoinMonie | Set Password";

  const navigate = useNavigate();

  const handleValidation = () => {
    navigate("/upload-image");
  };
  return (
    <SignUpContainer>
      <SignUpHeaderText>Get Started</SignUpHeaderText>
      <div style={{ display: "flex" }}>
        <Line style={{ width: "48%", background: "#eee" }} />
        <Line style={{ marginLeft: "auto" }} />
      </div>

      <SignUpForm>
        <p>Password and Security</p>
        <SignUpInputContainer>
          <label htmlFor="password">Password</label>
          <input type="password" />
          <p>Must be at least 8 characters.</p>
        </SignUpInputContainer>
        <SignUpInputContainer>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" />
          <p>Both passwords must match!</p>
        </SignUpInputContainer>
        <PasswordTC>
          <p>
            By signing up, you agree to our <span>Terms and Condition</span> and{" "}
            <span>Privacy Policy.</span>
          </p>
        </PasswordTC>
        <SignUpBtn onClick={() => handleValidation()}> Sign Up</SignUpBtn>{" "}
        <ReferralText>
          Already have an account? <Link to={"/login"}>Log In.</Link>
        </ReferralText>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default Password;
