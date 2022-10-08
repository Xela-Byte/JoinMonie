import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import {
  CreateCampaignBtn,
  CreateCampaignContainer,
  CreateCampaignForm,
  CreateCampaignHeader,
  CreateCampaignInput,
  CreateCampaignText,
} from "../styled/CreateCampaign";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-dropdown/style.css";
import { campaignStarter } from "../utils/CampaignStarterCategory";
import { countryNames } from "../utils/countryName";
import ArrowLeft from "../assets/images/arrow-right.svg";
import { ToastifyProps } from "../styled/UniversalStyles";

const CreateCampaign = () => {
  document.title = "JoinMonie | Create Campaign";

  const navigate = useNavigate();
  const [values, setValues] = useState({});

  const optionName = {
    country: "country",
    category: "category",
  };
  const defaultCountryOption = "Nigeria";
  const defaultCategoryOption = "Individual";

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCountrySelect = (selectedOption) => {
    setValues({
      ...values,
      [optionName.country]: selectedOption.name,
    });
  };

  const handleCategorySelect = (selectedOption) => {
    setValues({
      ...values,
      [optionName.category]: selectedOption.category,
    });
  };

  // const token = localStorage.getItem("JoinMonie-Verify-Token");

  const handleValidation = () => {
    let { campaignName, campaignStory, country, category, fundsGoal, endDate } =
      values;
    
    // Validtion for Form
    
    if (endDate === undefined) {
      toast.error("Please fill all fields", ToastifyProps);
      return false;
    }

    // Date Formatting
    let date = new Date();
    let year = date.toLocaleString("default", { year: "numeric" });
    let month = date.toLocaleString("default", { month: "2-digit" });
    let day = date.toLocaleString("default", { day: "2-digit" });
    let formattedDate = year + "-" + month + "-" + day;
    let presentDay = new Date().getDate();
    let presentMonth = new Date().getMonth() + 1;
    let presentYear = new Date().getFullYear();
    let endDateDay = endDate.slice(-2);
    if (endDateDay.charAt(0) === "0") {
      endDateDay = endDate.slice(-1);
    }
    endDateDay = Number(endDateDay);
    let endDateMonth = endDate.slice(5, 7);
    if (endDateMonth.charAt(0) === "0") {
      endDateMonth = endDate.slice(6, 7);
    }
    endDateMonth = Number(endDateMonth);
    let endDateYear = endDate.slice(0, 4);
    endDateYear = Number(endDateYear);
    let setEndDay = endDateDay - presentDay;
    let setEndMonth = endDateMonth - presentMonth;
    let setEndYear = endDateYear - presentYear;

    // Validation


    if (
      !campaignName ||
      !campaignStory ||
      !country ||
      !category ||
      !fundsGoal ||
      !endDate
    ) {
      toast.error("Please fill all fields.", ToastifyProps);
      return false;
    }
    if (campaignName.length < 4) {
      toast.error("Campaign name is too short.🙂", ToastifyProps);
      return false;
    }
    if (campaignStory.length < 6) {
      toast.error("Campaign story is too short.🤗", ToastifyProps);
      return false;
    }
    if (fundsGoal < 1000) {
      toast.error("Fund Goal is too small.🥺", ToastifyProps);
      return false;
    }
    if (formattedDate === endDate) {
      toast.error("You can't set End Date to today!🧙🏽", ToastifyProps);
      return false;
    }

    if (
      setEndDay.toString().slice(0, 1) === "-" ||
      setEndMonth.toString().slice(0, 1) === "-" ||
      setEndYear.toString().slice(0, 1) === "-"
    ) {
      toast.error(
        "You can only set End Date to the future, Time Traveller!🧙🏽",
        ToastifyProps
      );
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      localStorage.setItem("JoinMonie-Campaign", JSON.stringify(values));
      navigate("/create-campaign/input-email");
    }
  };

  return (
    <>
      <CreateCampaignContainer>
        <CreateCampaignHeader>
          <img src={ArrowLeft} alt="" onClick={() => navigate("/campaigns")} />
          <p>Start Campaign</p>
        </CreateCampaignHeader>
        <p>Lorem ipsum, dolor sit amet consectetur.</p>
        <CreateCampaignForm onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="campaign-name">Campaign Name</label>
          <CreateCampaignInput
            type={"text"}
            placeholder="Your campaign name"
            name="campaignName"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="campaign-story">Campaign Story</label>
          <CreateCampaignText
            type={"text"}
            placeholder="Your campaign story"
            rows={7}
            name="campaignStory"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="campaign-country">Country</label>
          <Select
            defaultValue={defaultCountryOption}
            onChange={(option) => handleCountrySelect(option)}
            placeholder={"Country"}
            options={countryNames}
            className={"dropdown-campaign"}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.name}
          />
          <label htmlFor="campaign-category">Category</label>
          <Select
            defaultValue={defaultCategoryOption}
            onChange={(option) => handleCategorySelect(option)}
            placeholder={"Category"}
            options={campaignStarter}
            className={"dropdown-campaign"}
            getOptionLabel={(option) => option.category}
            getOptionValue={(option) => option.category}
          />
          <label htmlFor="campaign-fund">Fund Raising goal</label>
          <CreateCampaignInput
            type={"number"}
            placeholder="0.00"
            name="fundsGoal"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="campaign-name">End Date</label>
          <CreateCampaignInput
            type={"date"}
            name="endDate"
            onChange={(e) => handleChange(e)}
          />
          <CreateCampaignBtn type="submit">Continue</CreateCampaignBtn>
        </CreateCampaignForm>
        <ToastContainer />
      </CreateCampaignContainer>
    </>
  );
};

export default CreateCampaign;
