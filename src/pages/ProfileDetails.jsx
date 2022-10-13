import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProfileDetailContainer,
  ProfileDetailHeader,
} from "../styled/ProfileDetails";
import { UploadImagePreview } from "../styled/Upload";
import CameraImg from "../assets/images/camera.svg";
import ArrowRight from "../assets/images/left-arrow.png";
import Select from "react-select";
import {
  SignUpBtn,
  SignUpDropdown,
  SignUpForm,
  SignUpInputContainer,
} from "../styled/SignUp";
import "react-dropdown/style.css";
import "react-toastify/dist/ReactToastify.css";
import { countryNames } from "../utils/countryName";
import { token } from "../utils/Credentials";
import { setProfilePhotoRoute } from "../utils/APIRoutes";
import axios from "axios";
import { toast } from "react-toastify";

const ProfileDetails = () => {
  document.title = "JoinMonie | Set Profile Image";
  const navigate = useNavigate();

  const [image, setImage] = useState(undefined);
  const [imageUpload, setImageUpload] = useState({});
  const [values, setValues] = useState({});

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
  const optionName = {
    country: "country",
    profilePhoto: "profilePhoto",
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCountrySelect = (selectedOption) => {
    setValues({
      ...values,
      [optionName.country]: selectedOption.name,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [optionName.profilePhoto]: imageUpload.profilePhoto,
    });

    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: token,
    };
    const createConfig = {
      method: "PATCH",
      url: setProfilePhotoRoute,
      headers: headers,
      data: values,
    };
    await axios(createConfig)
      .then((res) => console.log(res.data))
      .then(() => toast.success("Profile updated successfully"))
      .then(() =>
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000)
      )
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <ProfileDetailContainer>
      <ProfileDetailHeader>
        <img src={ArrowRight} alt="" onClick={() => navigate(-1)} />
        <p>Profile Details</p>
      </ProfileDetailHeader>
      <UploadImagePreview
        style={{
          width: "150px",
          height: "150px",
        }}
        onClick={() => handleClick()}
      >
        <input
          type="file"
          accept="image/*"
          ref={fileUpload}
          onChange={(e) => imageSelect(e)}
          name="profilePhoto"
          hidden
        />
        {!image && <img src={CameraImg} className="camera-icon" alt="" />}
        {image && <img src={image.image} alt="" />}
      </UploadImagePreview>
      <SignUpForm onSubmit={(e) => handleSubmit(e)}>
        <p>Personal Details</p>
        <SignUpInputContainer>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            autoComplete={"on"}
            name="fullName"
          />
        </SignUpInputContainer>
        <SignUpInputContainer>
          <label htmlFor="email">Email Address</label>
          <input type="text" onChange={(e) => handleChange(e)} name="email" />
        </SignUpInputContainer>
        <SignUpDropdown>
          <p>Country</p>
          <div>
            <Select
              defaultValue={"Nigeria"}
              onChange={(option) => handleCountrySelect(option)}
              placeholder={"Country"}
              options={countryNames}
              className={"dropdown-signup profile"}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.name}
            />
          </div>
        </SignUpDropdown>
        <SignUpInputContainer>
          <label htmlFor="organization">Organization (Optional)</label>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            name="organisationName"
          />
        </SignUpInputContainer>
        <SignUpBtn type="submit">Save</SignUpBtn>
      </SignUpForm>
    </ProfileDetailContainer>
  );
};

export default ProfileDetails;
