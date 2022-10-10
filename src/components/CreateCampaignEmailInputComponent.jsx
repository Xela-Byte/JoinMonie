import {
  CreateCampaignBtn,
  CreateCampaignDisplayImage,
  CreateCampaignEmailContent,
  CreateCampaignEmailInput,
} from "../styled/CreateCampaign";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../assets/images/left-arrow.png";
import { ToastifyProps } from "../styled/UniversalStyles";
import axios from "axios";
import { createCampaignRoute } from "../utils/APIRoutes";
import Loading from "./Loading";
import CreateCampaignSuccessComponent from "./CreateCampaignSuccessComponent";

const CreateCampaignEmailInputComponent = () => {
  //  Hooks
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState({});
  const [image, setImage] = useState(undefined);
  const [imageUpload, setImageUpload] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Getting Prepended campaign info and validation / verification token

  let newCampaignDetails = localStorage.getItem("JoinMonie-Campaign");
  newCampaignDetails = JSON.parse(newCampaignDetails);
  let token = localStorage.getItem("JoinMonie-Verify-Token");

  //  Getting User Input
  const handleEmail = (e) => {
    setEmailInput({ ...emailInput, [e.target.name]: e.target.value });
  };

  const fileUpload = useRef(null);
  const handleClick = () => {
    fileUpload.current.click();
  };

  const imageSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage({
        image: URL.createObjectURL(e.target.files[0]),
      });
      setImageUpload({ ...imageUpload, [e.target.name]: e.target.files[0] });
    }
  };

  const handleValidation = () => {
    const { campaignPhoto } = imageUpload;
    const { email } = emailInput;
    if (!email || !campaignPhoto) {
      toast.error("Please fill all fields.", ToastifyProps);
      return false;
    }
    if (!email) {
      toast.error("Please input an email", ToastifyProps);
      return false;
    }
    if (!email.includes("@") || !email.includes(".") || email.length < 8) {
      toast.error("Email is invalid.", ToastifyProps);
      return false;
    }
    if (!campaignPhoto) {
      toast.error("Please input an email", ToastifyProps);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async () => {
    const { campaignPhoto } = imageUpload;
    const { email } = emailInput;
    if (handleValidation()) {
      setLoading(true);
      newCampaignDetails = { ...newCampaignDetails, email };
      newCampaignDetails = { ...newCampaignDetails, campaignPhoto };

      // Configuring Axios
      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      };
      const createConfig = {
        method: "POST",
        url: createCampaignRoute,
        headers: headers,
        data: newCampaignDetails,
      };
      await axios(createConfig)
        .then((res) => {
          console.log(res.data);
        })
        .then(() => {
          setLoading(false);
          setShowSuccess(true);
        })
        .then(() =>
          setTimeout(() => {
            navigate("/campaigns");
          }, 3000)
        )
        .then(() => {
          localStorage.removeItem("JoinMonie-Campaign");
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.response.data.message);
          console.log(err);
        });
    }
  };
  return (
    <>
      {loading && <Loading />}
      {showSuccess && <CreateCampaignSuccessComponent />}
      <CreateCampaignEmailContent>
        <img src={ArrowLeft} alt="" onClick={() => navigate(-1)} />
        <label htmlFor="email">Email Address</label>
        <CreateCampaignEmailInput
          type={"email"}
          placeholder="name@domain.com"
          name="email"
          onChange={(e) => handleEmail(e)}
        />
        <label htmlFor="info">
          It is highly recommended to make use of a landscape image to better
          fit proportions.
        </label>
        <CreateCampaignDisplayImage onClick={() => handleClick()}>
          <input
            type="file"
            accept="image/*"
            ref={fileUpload}
            onChange={(e) => imageSelect(e)}
            name="campaignPhoto"
            hidden
          />
          {!image && <p>Upload Campaign Photo</p>}
          {image && <img src={image.image} alt="" />}
        </CreateCampaignDisplayImage>
        <CreateCampaignBtn onClick={() => handleSubmit()}>
          Done
        </CreateCampaignBtn>
        <ToastContainer />
      </CreateCampaignEmailContent>
    </>
  );
};

export default CreateCampaignEmailInputComponent;
