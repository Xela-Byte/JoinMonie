import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ArrowRight from "../assets/images/left-arrow.png";
import "react-toastify/dist/ReactToastify.css";
import {
  SecurityHeader,
  SignUpBtn,
  SignUpContainer,
  SignUpForm,
  SignUpInputContainer,
} from "../styled/SignUp";
import { updatePasswordRoute } from "../utils/APIRoutes";
import Eye from "../assets/images/eye.svg";
import EyeSlash from "../assets/images/eye-slash.svg";
import useGetWindowSize from "../hooks/useWindowSize";
import { token } from "../utils/Credentials";

const ForgotPassword = () => {
  // ******** //
  // Set Password```//
  //********* //

  //  Title for the page
  document.title = "JoinMonie | Forgot Password";

  // Hooks
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const windowWidth = useGetWindowSize().innerWidth;

  // Password Reveal
  const handlePasswordReveal = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPasswordReveal = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Getting Inputs
  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  // Validation
  const handleValidation = () => {
    const { password, confirmPassword } = passwords;
    if (!password || !confirmPassword) {
      toast.error("Please input your password");
      return false;
    }
    if (password < 8 || confirmPassword < 8) {
      toast.error("Password is too short");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Both passwords does not match");
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (handleValidation()) {
      const headers = {
        Authorization: token,
        "Content-Type": "application/json",
      };
      const resetConfig = {
        method: "POST",
        url: updatePasswordRoute,
        headers: headers,
        data: {
          password: password,
        },
      };
      await axios(resetConfig)
        .then(() => {
          toast.success("Password changed successfully");
        })
        .then(() => {
          setTimeout(() => {
            navigate("/dashboard");
          }, 5000);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
  };

  const { password, confirmPassword } = passwords;

  return (
    <>
      <SignUpContainer
        style={{
          width: windowWidth > 990 ? "60%" : "",
          margin: windowWidth > 990 ? "auto" : "",
        }}
      >
        <SignUpForm onSubmit={(e) => handleSubmit(e)}>
          <SecurityHeader
            style={{
              height: "15%",
            }}
          >
            <img src={ArrowRight} onClick={() => navigate(-1)} alt="" />
            <p>Reset Password</p>
          </SecurityHeader>
          <SignUpInputContainer>
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={(e) => handleChange(e)}
              value={password}
            />
            <img
              src={showPassword ? EyeSlash : Eye}
              alt=""
              onClick={() => handlePasswordReveal()}
            />
            <p>Must be at least 8 characters .</p>
          </SignUpInputContainer>
          <SignUpInputContainer>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={(e) => handleChange(e)}
              autoComplete="new-password"
              value={confirmPassword}
            />
            {showConfirmPassword ? (
              <img
                src={EyeSlash}
                alt=""
                onClick={() => handleConfirmPasswordReveal()}
              />
            ) : (
              <img
                src={Eye}
                alt=""
                onClick={() => handleConfirmPasswordReveal()}
              />
            )}

            <p>Both passwords must match!</p>
          </SignUpInputContainer>
          <SignUpBtn type="submit">Reset</SignUpBtn>
        </SignUpForm>
        <ToastContainer />
      </SignUpContainer>
    </>
  );
};

export default ForgotPassword;
