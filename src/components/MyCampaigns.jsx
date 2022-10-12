import {
  ExploreCampaignContainer,
  ExploreCampaignContent,
  ExploreCampaignInfo,
  ExploreCampaignTab,
  ExploreCampaignWrapper,
  ExploreGhostContent,
} from "../styled/Explore";
import { ProgressBarContainer, ProgressBar } from "../styled/Dashboard";
import { colors } from "../styled/UniversalStyles";
import { useNavigate } from "react-router-dom";
import useGetWindowSize from "../hooks/useWindowSize";

const MyCampaigns = ({ userCampaign }) => {
  const navigate = useNavigate();
  const windowWidth = useGetWindowSize().innerWidth;
  return (
    <ExploreCampaignWrapper
      style={{
        padding: "5%",
        width: windowWidth > 990 ? "70%" : "",
        margin: windowWidth > 990 ? "auto" : "",
      }}
    >
      <p>My Campaigns</p>
      <ExploreCampaignContainer>
        {userCampaign.map((campaign) => {
          let { _id, campaignPhoto, campaignName, currentBalance, fundsGoal } =
            campaign;

          const currencySymbols = ["$"];

          if (currencySymbols.includes(fundsGoal.toString().charAt(0))) {
            fundsGoal = fundsGoal.toString().slice(1);
          }

          let progress = (Number(currentBalance) / Number(fundsGoal)) * 100;

          return (
            <ExploreCampaignTab
              key={_id}
              onClick={() => navigate(`/campaign-details?id=${_id}`)}
            >
              <img src={campaignPhoto} alt="" />
              <ExploreCampaignContent>
                <p>{campaignName}</p>
                <ProgressBarContainer>
                  <ProgressBar
                    style={{
                      width: `${progress}%`,
                      minHeight: "0.5rem",
                      background: ` ${colors.blue}`,
                    }}
                  />
                </ProgressBarContainer>
                <ExploreCampaignInfo>
                  <p>
                    {currentBalance} / {fundsGoal}
                  </p>
                  <p>{progress}%</p>
                </ExploreCampaignInfo>
              </ExploreCampaignContent>
            </ExploreCampaignTab>
          );
        })}
      </ExploreCampaignContainer>
      <ExploreGhostContent />
    </ExploreCampaignWrapper>
  );
};

export default MyCampaigns;
