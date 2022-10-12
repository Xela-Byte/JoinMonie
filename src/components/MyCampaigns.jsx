import {
  ExploreCampaignContainer,
  ExploreCampaignContent,
  ExploreCampaignWrapper,
  ExploreGhostContent,
} from "../styled/Explore";
import { useNavigate } from "react-router-dom";
import useGetWindowSize from "../hooks/useWindowSize";
import { useState } from "react";
import { useEffect } from "react";
import { token } from "../utils/Credentials";
import { allCampaignRoute } from "../utils/APIRoutes";
import axios from "axios";
import { MyCampaignsTab, ViewCampaignProgressBtn } from "../styled/Campaigns";

const MyCampaigns = () => {
  //  Hooks
  const navigate = useNavigate();
  const windowWidth = useGetWindowSize().innerWidth;
  const [campaigns, setCampaigns] = useState([]);

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
          const userCampaigns = res.data.campaigns.filter((campaign) => {
            return campaign.userId === _id;
          });
          setCampaigns(userCampaigns);
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
  }, [_id]);

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
        {campaigns.map((campaign) => {
          let { _id, campaignPhoto, campaignName } = campaign;

          return (
            <MyCampaignsTab key={_id}>
              <img src={campaignPhoto} alt="" />
              <ExploreCampaignContent>
                <p>{campaignName}</p>
              </ExploreCampaignContent>
              <ViewCampaignProgressBtn
                onClick={() => navigate(`/campaign-progress?id=${_id}`)}
              >
                View Progress
              </ViewCampaignProgressBtn>
            </MyCampaignsTab>
          );
        })}
      </ExploreCampaignContainer>
      <ExploreGhostContent />
    </ExploreCampaignWrapper>
  );
};

export default MyCampaigns;
