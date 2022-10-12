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
import { useState } from "react";
import { useEffect } from "react";
import { token } from "../utils/Credentials";
import { allCampaignRoute } from "../utils/APIRoutes";
import axios from "axios";

const MyCampaigns = () => {
  //  Hooks
  const navigate = useNavigate();
  const windowWidth = useGetWindowSize().innerWidth;
  const [campaigns, setCampaigns] = useState([]);
  const [userCampaignsArr, setUserCampaignsArr] = useState([]);

  // User Credentials
  let user = localStorage.getItem("JoinMonie-User");
  user = JSON.parse(user);
  const { _id } = user;

  // Getting Campaigns
  useEffect(() => {
    const getSingleCampaign = async () => {
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
          setCampaigns(res.data.campaigns);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (document.readyState === "complete") {
      getSingleCampaign();
    } else {
      window.addEventListener("load", () => {
        getSingleCampaign();
      });
      return () =>
        document.removeEventListener("load", () => {
          getSingleCampaign();
        });
    }
  }, []);

  useEffect(() => {
    const userCampaigns = campaigns.filter((campaign) => {
      return campaign.userId === _id;
    });
    return () => {
      setUserCampaignsArr(userCampaigns);
    };
  }, [_id, campaigns]);
  console.log(userCampaignsArr);
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
        {userCampaignsArr.map((campaign) => {
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
