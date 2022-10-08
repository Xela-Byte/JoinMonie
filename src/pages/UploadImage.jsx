import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { colors } from "../styled/UniversalStyles";
import {
  UploadBtn,
  UploadBtnContainer,
  UploadContainer,
  UploadContent,
  UploadHeaderText,
  UploadImagePreview,
} from "../styled/Upload";

import CameraImg from "../assets/images/camera.svg";
import { setProfilePhotoRoute } from "../utils/APIRoutes";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../components/Loading";

const UploadImage = () => {
  document.title = "JoinMonie | Set Profile Image";
  const navigate = useNavigate();

  const [image, setImage] = useState(undefined);
  const [imageUpload, setImageUpload] = useState({});
  const [loading, setLoading] = useState(false);

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
    if (!imageUpload || !image) {
      toast.error("Please select a profile image or skip to add later.");
      return false;
    } else {
      return true;
    }
  };

  const onComplete = async () => {
    if (handleValidation()) {
      setLoading(true);
      const token = localStorage.getItem("JoinMonie-Verify-Token");
      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      };
      const createConfig = {
        method: "PATCH",
        url: setProfilePhotoRoute,
        headers: headers,
        data: imageUpload,
      };
      await axios(createConfig)
        .then((res) => console.log(res.data))
        .then(() => toast.success("Profile photo set successfully"))
        .then(() =>
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000)
        )
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
      <UploadContainer>
        <UploadHeaderText>upload a profile image</UploadHeaderText>
        <UploadContent>
          <UploadImagePreview onClick={() => handleClick()}>
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
          <p>Kindly set a clear and nice looking picture of yourself.</p>
          <UploadBtnContainer>
            <UploadBtn onClick={() => onComplete()}>Completed</UploadBtn>
            <UploadBtn
              style={{
                background: "transparent",
                color: colors.blue,
                border: `1px solid ${colors.blue}`,
              }}
              onClick={() => navigate("/dashboard")}
            >
              Skip
            </UploadBtn>
          </UploadBtnContainer>
        </UploadContent>
        <ToastContainer />
      </UploadContainer>
    </>
  );
};

export default UploadImage;
