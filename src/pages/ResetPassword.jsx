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
import { forgotPasswordRoute } from "../utils/APIRoutes";
import useGetWindowSize from "../hooks/useWindowSize";
import Loading from "../components/Loading";

const Security = () => {
  // ******** //
  // Set Password```//
  //********* //

  //  Title for the page
  document.title = "JoinMonie | Set Security";

  // Hooks
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState({});
  const [loading, setLoading] = useState(false);
  const windowWidth = useGetWindowSize().innerWidth;

  const handleChange = (e) => {
    setEmailAddress({ ...emailAddress, [e.target.name]: e.target.value });
  };

  console.log(emailAddress);

  // Validation
  const handleValidation = () => {
    const { email } = emailAddress;
    if (!email.includes("@") || !email.includes(".") || email.length < 8) {
      toast.error("Email is invalid.");
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (handleValidation()) {
      const headers = {
        "Content-Type": "application/json",
      };
      const resetConfig = {
        method: "POST",
        url: forgotPasswordRoute,
        headers: headers,
        data: emailAddress,
      };
      await axios(resetConfig)
        .then((res) => {
          setLoading(false);
          console.log(res.data);
          localStorage.setItem("resetToken", res.data.resetToken);
          toast.success("Your request is sent successfully");
        })
        .then(() => {
          navigate("/forgot-password");
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.response.data.message);
        });
    }
  };

  return (
    <>
      {loading && <Loading />}
      <SignUpContainer
        style={{
          width: windowWidth > 990 ? "60%" : "",
        }}
      >
        <SignUpForm onSubmit={(e) => handleSubmit(e)}>
          <SecurityHeader
            style={{
              height: "15%",
            }}
          >
            <img src={ArrowRight} onClick={() => navigate(-1)} alt="" />
            <p>Forgot Password</p>
          </SecurityHeader>
          <SignUpInputContainer>
            <label htmlFor="password">Email</label>
            <input
              type={"text"}
              name="email"
              onChange={(e) => handleChange(e)}
            />
          </SignUpInputContainer>

          <SignUpBtn type="submit">Reset</SignUpBtn>
        </SignUpForm>
        <ToastContainer />
      </SignUpContainer>
    </>
  );
};

export default Security;
