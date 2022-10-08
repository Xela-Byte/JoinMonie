import { useNavigate } from "react-router-dom";
import Correct from "../assets/images/correct.svg";

import {
  CreateCampaignSucessContainer,
  CreateCampaignSucess,
  CreateCampaignSuccessIcon,
  CreateCampaignSuccessBtn,
} from "../styled/CreateCampaign";

const CreateCampaignSuccessComponent = () => {
  const navigate = useNavigate();
  return (
    <CreateCampaignSucessContainer>
      <CreateCampaignSucess>
        <CreateCampaignSuccessIcon>
          <img src={Correct} alt="" />
        </CreateCampaignSuccessIcon>
        <p>Campaign created successfully.</p>
        <CreateCampaignSuccessBtn onClick={() => navigate("/campaigns")}>
          Back to Campaigns
        </CreateCampaignSuccessBtn>
      </CreateCampaignSucess>
    </CreateCampaignSucessContainer>
  );
};

export default CreateCampaignSuccessComponent;
