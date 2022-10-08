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
import { ProgressBarContainer, ProgressBar } from "../styled/Dashboard";
import { colors } from "../styled/UniversalStyles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../components/Loading";
import { allCampaignRoute } from "../utils/APIRoutes";
import { useEffect } from "react";

const Explore = () => {
  document.title = "JoinMonie | Explore";

  // Hooks
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  // Getting Campaigns
  const getCampaigns = async () => {
    setLoading(true);
    let token = localStorage.getItem("JoinMonie-Verify-Token");
    const headers = {
      Authorization: token,
    };
    const getConfig = {
      method: "GET",
      url: allCampaignRoute,
      headers: headers,
    };
    await axios(getConfig)
      .then((res) => {
        setLoading(false);
        setCampaigns(res.data.campaigns);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response.data.message);
        console.log(err);
      });
  };

  // Calling the function whenever window loads.
  useEffect(() => {
    if (document.readyState === "complete") {
      getCampaigns();
    } else {
      window.addEventListener("load", () => {
        getCampaigns();
      });
      return () =>
        document.removeEventListener("load", () => {
          getCampaigns();
        });
    }
  }, []);

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
          {loading && <Loading />}
          <ExploreCampaignContainer>
            {campaigns.map((campaign) => {
              let {
                _id,
                campaignPhoto,
                campaignName,
                currentBalance,
                fundsGoal,
              } = campaign;

              const currencySymbols = ["$"];

              if (currencySymbols.includes(fundsGoal.toString().charAt(0))) {
                fundsGoal = fundsGoal.toString().slice(1);
              }

              let progress = (Number(currentBalance) / Number(fundsGoal)) * 100;

              return (
                <ExploreCampaignTab
                  key={_id}
                  onClick={() => navigate("/campaign-details")}
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
        <ToastContainer />
      </ExploreContainer>
      <FooterNav />
    </>
  );
};

export default Explore;
