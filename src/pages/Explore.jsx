import FooterNav from "../components/FooterNav";
import {
  CategoryTab,
  CategoryTabContainer,
  CategoryTabContent,
  ExploreCampaignContainer,
  ExploreCampaignContent,
  ExploreCampaignInfo,
  ExploreCampaignTab,
  ExploreCampaignWrapper,
  ExploreContainer,
  ExploreGhostContent,
  ExploreHeader,
} from "../styled/Explore";
import { ExploreCampaign } from "../utils/ExploreCampaigns";
import { ProgressBarContainer, ProgressBar } from "../styled/Dashboard";
import { colors } from "../styled/UniversalStyles";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();
  return (
    <>
      <ExploreContainer>
        <ExploreHeader>
          <p>Explore Campaigns</p>
          <p>Here are some campaigns you can support</p>
        </ExploreHeader>
        <CategoryTabContainer>
          <p>Categories</p>
          <CategoryTabContent>
            <CategoryTab>
              <p>Education</p>
            </CategoryTab>
            <CategoryTab>
              <p>Health</p>
            </CategoryTab>
            <CategoryTab>
              <p>Charity</p>
            </CategoryTab>
            <CategoryTab>
              <p>Social</p>
            </CategoryTab>
            <CategoryTab>
              <p>Business</p>
            </CategoryTab>
            <CategoryTab>
              <p>Environment</p>
            </CategoryTab>
          </CategoryTabContent>
        </CategoryTabContainer>
        <ExploreCampaignWrapper>
          <ExploreCampaignContainer>
            {ExploreCampaign.map((campaign) => {
              const {
                id,
                exploreImage,
                exploreDesc,
                explorePatientName,
                amountFunded,
                totalAmount,
              } = campaign;

              let progress = (amountFunded / totalAmount) * 100;

              return (
                <ExploreCampaignTab
                  key={id}
                  onClick={() => navigate("/campaign-details")}
                >
                  <img src={exploreImage} alt="" />
                  <ExploreCampaignContent>
                    <p>{exploreDesc}</p>
                    <p>{explorePatientName}</p>
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
                        ${amountFunded} / ${totalAmount}
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
      </ExploreContainer>
      <FooterNav />
    </>
  );
};

export default Explore;
