import FooterNav from "../components/FooterNav";
import {
  CampaignsStyledHeader,
  CampaignStyledContainer,
  ExploreNoCampaignContent,
  ExploreStartCampaignBtn,
} from "../styled/Campaigns";
import NoCampaign from "../assets/images/warning.svg";
import { useNavigate } from "react-router-dom";

const Campaigns = () => {
  document.title = "JoinMonie | Campaigns";

  // Hooks
  const navigate = useNavigate();
  
  return (
    <>
      <CampaignStyledContainer>
        <CampaignsStyledHeader>
          <p>My Campaigns</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            illum!
          </p>
        </CampaignsStyledHeader>
        <ExploreNoCampaignContent>
          <img src={NoCampaign} alt="" />
          <p>You have no campaigns</p>
        </ExploreNoCampaignContent>
        <ExploreStartCampaignBtn onClick={() => navigate("/create-campaign")}>
          <p>Start a campaign</p>
        </ExploreStartCampaignBtn>
      </CampaignStyledContainer>
      <FooterNav />
    </>
  );
};

export default Campaigns;
