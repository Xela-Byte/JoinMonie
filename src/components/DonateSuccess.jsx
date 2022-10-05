import {
  CreateCampaignSuccessBtn,
  CreateCampaignSuccessIcon,
  CreateCampaignSucess,
  CreateCampaignSucessContainer,
} from "../styled/CreateCampaign";

import Correct from "../assets/images/correct.svg";
import { useNavigate } from "react-router-dom";

const DonateSuccess = () => {
  const navigate = useNavigate();

  return (
    <CreateCampaignSucessContainer>
      <CreateCampaignSucess>
        <CreateCampaignSuccessIcon>
          <img src={Correct} alt="" />
        </CreateCampaignSuccessIcon>
        <p>Thank you for donating.</p>
        <CreateCampaignSuccessBtn onClick={() => navigate("/dashboard")}>
          Back to Home
        </CreateCampaignSuccessBtn>
      </CreateCampaignSucess>
    </CreateCampaignSucessContainer>
  );
};

export default DonateSuccess;
