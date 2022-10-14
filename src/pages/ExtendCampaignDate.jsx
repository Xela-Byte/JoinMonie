import axios from "axios";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  SecurityHeader,
  SignUpBtn,
  SignUpInputContainer,
} from "../styled/SignUp";
import { allCampaignRoute } from "../utils/APIRoutes";
import { token } from "../utils/Credentials";
import ArrowRight from "../assets/images/left-arrow.png";

const ExtendCampaignDate = () => {
  const [date, setDate] = useState({});
  const [searchParams] = useSearchParams();
  const campaignId = searchParams.get("id");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDate({ ...date, [e.target.name]: e.target.value });
  };

  const setCampaignDate = async () => {
    const headers = {
      Authorization: token,
    };
    const extendConfig = {
      method: "POST",
      url: `${allCampaignRoute}/update/${campaignId}`,
      headers: headers,
      data: date,
    };
    await axios(extendConfig)
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message);
      })
      .then(() => {
        setTimeout(() => {
          navigate("/explore");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.data.response.message);
      });
  };
  return (
    <SignUpInputContainer
      style={{
        padding: "5%",
      }}
    >
      <SecurityHeader style={{ marginBottom: "5%" }}>
        <img src={ArrowRight} alt="" onClick={() => navigate(-1)} />
        <p>Extend Campaign date</p>
      </SecurityHeader>
      <label htmlFor="endDate">
        Extend Campaign date. Please pick a date later than the previous one.
      </label>
      <input
        type="date"
        placeholder="dd-mm-yy"
        onChange={(e) => handleChange(e)}
        name="endDate"
      />
      <SignUpBtn style={{ marginTop: "5%" }} onClick={() => setCampaignDate()}>
        Extend
      </SignUpBtn>
      <ToastContainer />
    </SignUpInputContainer>
  );
};

export default ExtendCampaignDate;
