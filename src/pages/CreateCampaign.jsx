import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreateCampaignBtn,
  CreateCampaignContainer,
  CreateCampaignDisplayImage,
  CreateCampaignEmailContent,
  CreateCampaignEmailInput,
  CreateCampaignForm,
  CreateCampaignHeader,
  CreateCampaignInput,
  CreateCampaignSuccessBtn,
  CreateCampaignSuccessIcon,
  CreateCampaignSucess,
  CreateCampaignSucessContainer,
} from "../styled/CreateCampaign";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { campaignStarter } from "../utils/CampaignStarterCategory";
import { countryNames } from "../utils/countryName";
import ArrowLeft from "../assets/images/arrow-right.svg";
import Correct from "../assets/images/correct.svg";

const CreateCampaign = () => {
  document.title = "JoinMonie | Create Campaign";

  const navigate = useNavigate();

  const countryName = countryNames.map((country) => {
    const { name } = country;
    return name;
  });

  const categoryName = campaignStarter.map((categoryContent) => {
    const { category } = categoryContent;
    return category;
  });

  const defaultCountryOption = "Nigeria";
  const defaultCategoryOption = "Broke Ass Nigga";

  const [showSuccess, setShowSuccess] = useState(false);

  const handleShowSuccess = () => {
    setShowSuccess(true);
  };

  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleShowEmailInput = (e) => {
    e.preventDefault();
    setShowEmailInput(true);
    console.log("true");
  };

  return (
    <>
      {showSuccess && (
        <CreateCampaignSucessContainer>
          <CreateCampaignSucess>
            <CreateCampaignSuccessIcon>
              <img src={Correct} alt="" />
            </CreateCampaignSuccessIcon>
            <p>Your campaign setup was successful</p>
            <CreateCampaignSuccessBtn onClick={() => navigate("/dashboard")}>
              Go Home
            </CreateCampaignSuccessBtn>
          </CreateCampaignSucess>
        </CreateCampaignSucessContainer>
      )}
      <CreateCampaignContainer>
        <CreateCampaignHeader>
          <img src={ArrowLeft} alt="" onClick={() => navigate("/campaigns")} />
          <p>Start Campaign</p>
        </CreateCampaignHeader>
        <p>Lorem ipsum, dolor sit amet consectetur.</p>
        {showEmailInput === false && (
          <CreateCampaignForm>
            <label htmlFor="campaign-name">Campaign Name</label>
            <CreateCampaignInput
              type={"text"}
              placeholder="Your campaign name"
            />
            <label htmlFor="campaign-story">Campaign Story</label>
            <CreateCampaignInput
              type={"text"}
              placeholder="Your campaign story"
            />
            <label htmlFor="campaign-country">Country</label>
            <Dropdown
              options={countryName}
              value={defaultCountryOption}
              placeholder="Country"
              className="dropdown-campaign"
            />
            <label htmlFor="campaign-category">Category</label>
            <Dropdown
              options={categoryName}
              value={defaultCategoryOption}
              placeholder="Category"
              className="dropdown-campaign"
            />
            <label htmlFor="campaign-fund">Fund Raising goal</label>
            <CreateCampaignInput type={"number"} placeholder="₦  0.00" />
            <label htmlFor="campaign-name">End Date</label>
            <CreateCampaignInput type={"date"} />
            <CreateCampaignBtn onClick={(e) => handleShowEmailInput(e)}>
              Continue
            </CreateCampaignBtn>
          </CreateCampaignForm>
        )}
        {showEmailInput && (
          <CreateCampaignEmailContent>
            <label htmlFor="email">Email Address</label>
            <CreateCampaignEmailInput
              type={"email"}
              placeholder="name@domain.com"
            />
            <CreateCampaignDisplayImage>
              <p>Upload Campaign Photo</p>
            </CreateCampaignDisplayImage>
            <CreateCampaignBtn onClick={() => handleShowSuccess()}>
              Done
            </CreateCampaignBtn>
          </CreateCampaignEmailContent>
        )}
      </CreateCampaignContainer>
    </>
  );
};

export default CreateCampaign;
