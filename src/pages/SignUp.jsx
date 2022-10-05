import {
  ReferralText,
  SignUpBtn,
  SignUpContainer,
  SignUpDropdown,
  SignUpForm,
  SignUpHeaderText,
  SignUpInputContainer,
} from "../styled/SignUp";
import { Line } from "../styled/UniversalStyles";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { countryNames } from "../utils/countryName";
import { currencyLists } from "../utils/currencyList";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  document.title = "JoinMonie | Sign Up";
  const countryName = countryNames.map((country) => {
    const { name } = country;
    return name;
  });

  const currencyName = currencyLists.map((currency, index) => {
    let { currency_code } = currency;
    if (currency_code === null) {
      currency_code = "";
    }
    return <>{currency_code}</>;
  });

  const defaultCountryOption = "Nigeria";
  const defaultCurrencyOption = "Naira";

  let navigate = useNavigate();

  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    navigate("/set-password");
  };

  return (
    <SignUpContainer>
      <SignUpHeaderText>Get Started</SignUpHeaderText>
      <div style={{ display: "flex" }}>
        <Line style={{ width: "48%" }} />
        <Line style={{ marginLeft: "auto", background: "#eee" }} />
      </div>
      <SignUpForm>
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
          <div className="">
            <p>Country</p>
            <p>Preferred Currency</p>
          </div>
          <div>
            <Dropdown
              options={countryName}
              value={defaultCountryOption}
              placeholder="Select an option"
              className="dropdown-signup"
            />

            <Dropdown
              options={currencyName}
              value={defaultCurrencyOption}
              placeholder="Select an option"
              className="dropdown-signup"
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
        <SignUpInputContainer>
          <label htmlFor="dob">
            Date of Birth (Must be above the age of 18)
          </label>
          <input
            type="date"
            placeholder="dd-mm-yy"
            onChange={(e) => handleChange(e)}
            name="DOB"
          />
        </SignUpInputContainer>
        <SignUpBtn onClick={() => handleValidation()}>Next</SignUpBtn>
        <ReferralText>
          Already have an account? <Link to={"/login"}>Log In.</Link>
        </ReferralText>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
