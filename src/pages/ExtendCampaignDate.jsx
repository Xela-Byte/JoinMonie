import { useState } from "react";

const ExtendCampaignDate = ({campaignId}) => {
  const [date, setDate] = useState({});

  const handleChange = (e) => {
    setDate({ ...date, [e.target.name]: e.target.value });
  };
  return (
    <SignUpInputContainer>
      <label htmlFor="dob">Date of Birth (Must be above the age of 18)</label>
      <input
        type="date"
        placeholder="dd-mm-yy"
        onChange={(e) => handleChange(e)}
        name="endDate"
      />
    </SignUpInputContainer>
  );
};

export default ExtendCampaignDate;
