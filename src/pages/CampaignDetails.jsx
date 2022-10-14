import {
  CampaignDetailAboutContainer,
  CampaignDetailContainer,
  CampaignDetailContent,
  CampaignDetailDonate,
  CampaignDetailDonateBtn,
  CampaignDetailHeader,
  CampaignDetailProgressBar,
  CampaignDetailProgressBarContainer,
  CampaignDetailShareBtn,
  CampaignDetailTrack,
  CampaignDetailTrackContainer,
} from "../styled/CampignDetails";
import ArrowLeft from "../assets/images/left-arrow.png";
import Flag from "../assets/images/flag.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import Person1 from "../assets/images/person-1.jpg";
import Person2 from "../assets/images/person-2.png";
import Person3 from "../assets/images/person-3.jpg";
import Share from "../assets/images/share (1).png";
import { useState } from "react";
import { getSingleCampaignRoute } from "../utils/APIRoutes";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import ShareTab from "../components/ShareTab";
import { AnimatePresence } from "framer-motion";

const CampaignDetails = () => {
  // Hooks
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState({});
  const [searchParams] = useSearchParams();
  const campaignId = searchParams.get("id");
  const [showShareTab, setShowShareTab] = useState(false);

  // Calling the function whenever window loads.
  useEffect(() => {
    // Getting Campaigns
    const getSingleCampaign = async () => {
      let token = localStorage.getItem("JoinMonie-Verify-Token");
      const headers = {
        Authorization: token,
      };
      const getConfig = {
        method: "GET",
        url: `${getSingleCampaignRoute}/${campaignId}`,
        headers: headers,
      };
      await axios(getConfig)
        .then((res) => {
          setCampaign(res.data.campaign);
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
  }, [campaignId]);

  let {
    campaignPhoto,
    campaignName,
    currentBalance,
    fundsGoal,
    email,
    campaignStory,
  } = campaign;

  const currencySymbols = ["$"];

  if (fundsGoal) {
    if (currencySymbols.includes(fundsGoal.toString().charAt(0))) {
      fundsGoal = fundsGoal.toString().slice(1);
    }
  }

  let progress = (Number(currentBalance) / Number(fundsGoal)) * 100;

  return (
    <CampaignDetailContainer>
      <AnimatePresence>
        {showShareTab && (
          <ShareTab
            campaignLink={`https://join-monie.vercel.app/campaign-details?id=${campaignId}`}
          />
        )}
      </AnimatePresence>

      <CampaignDetailHeader>
        <img src={ArrowLeft} alt="" onClick={() => navigate(-1)} />
        <p>Details</p>
        <img src={Flag} alt="" />
      </CampaignDetailHeader>
      <CampaignDetailContent>
        <img src={campaignPhoto} alt="" />
        <p>{campaignName}</p>
        <p>{email}</p>
        <CampaignDetailDonate>
          <div>
            <img src={Person1} alt={"Person"} />
            <img src={Person3} alt={"Person"} />
            <img src={Person2} alt={"Person"} />
          </div>
          <p>123+ people donated</p>
        </CampaignDetailDonate>
        <CampaignDetailProgressBarContainer>
          <CampaignDetailProgressBar
            style={{
              width: `${progress}%`,
            }}
          ></CampaignDetailProgressBar>
        </CampaignDetailProgressBarContainer>
        <CampaignDetailTrackContainer>
          <CampaignDetailTrack>
            <p>{currentBalance}</p>
            <p>Raised</p>
          </CampaignDetailTrack>
          <CampaignDetailTrack>
            <p>{fundsGoal}</p>
            <p>Goal</p>
          </CampaignDetailTrack>
          <CampaignDetailTrack>
            <p>{progress}%</p>
            <p>Completed</p>
          </CampaignDetailTrack>
        </CampaignDetailTrackContainer>
        <CampaignDetailAboutContainer>
          <p>About Campaign</p>
          <p>{campaignStory}</p>
        </CampaignDetailAboutContainer>
        <div
          style={{
            display: "flex",
            gap: "10%",
          }}
        >
          <CampaignDetailDonateBtn
            onClick={() => navigate(`/donate?id=${campaignId}`)}
          >
            Make a donation
          </CampaignDetailDonateBtn>
          <CampaignDetailShareBtn
            onClick={() => setShowShareTab(!showShareTab)}
          >
            <img src={Share} alt="" />
          </CampaignDetailShareBtn>
        </div>
      </CampaignDetailContent>
    </CampaignDetailContainer>
  );
};

export default CampaignDetails;
