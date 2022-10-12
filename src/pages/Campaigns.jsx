import FooterNav from "../components/FooterNav";
import {
  CampaignsStyledHeader,
  CampaignStyledContainer,
  ExploreNoCampaignContent,
  ExploreStartCampaignBtn,
} from "../styled/Campaigns";
import NoCampaign from "../assets/images/warning.svg";
import { useNavigate } from "react-router-dom";
import MyCampaigns from "../components/MyCampaigns";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { token } from "../utils/Credentials";
import { allCampaignRoute } from "../utils/APIRoutes";
import { toast } from "react-toastify";

const Campaigns = () => {
  document.title = "JoinMonie | Campaigns";

  // Hooks
  const navigate = useNavigate();

  // Checking if user has campaigns
  const [campaigns, setCampaigns] = useState([]);
  const [userCampaignsArr, setUserCampaignsArr] = useState([]);

  // Getting User Credentials
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
          toast.error(err.response.data.message);
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
  return (
    <>
      {userCampaignsArr === [] ? (
        <CampaignStyledContainer>
          <CampaignsStyledHeader>
            <p>My Campaigns</p>
            <p>Here are the previews of all your campaigns.</p>
          </CampaignsStyledHeader>
          <ExploreNoCampaignContent>
            <img src={NoCampaign} alt="" />
            <p>You have no campaigns</p>
          </ExploreNoCampaignContent>
          <ExploreStartCampaignBtn onClick={() => navigate("/create-campaign")}>
            <p>Start a campaign</p>
          </ExploreStartCampaignBtn>
        </CampaignStyledContainer>
      ) : (
        <MyCampaigns />
      )}

      <FooterNav />
    </>
  );
};

export default Campaigns;
