import {
  ViewProgressCircle,
  ViewProgressContainer,
  ViewProgressDate,
  ViewProgressDay,
  ViewProgressDonated,
  ViewProgressDonatedAvatar,
  ViewProgressExtendBtn,
  ViewProgressFunds,
  ViewProgressHeader,
  ViewProgressImage,
  ViewProgressStory,
  ViewProgressWithdrawBtn,
} from "../styled/ViewProgress";
import ArrowLeft from "../assets/images/left-arrow.png";
import Fire from "../assets/images/firefighter.jpg";
import { useEffect } from "react";
import { allCampaignRoute } from "../utils/APIRoutes";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { token } from "../utils/Credentials";

const ViewCampaignProgress = () => {
  //  Hooks
  const [searchParams] = useSearchParams();
  const campaignId = searchParams.get("id");
  const [campaign, setCampaign] = useState([]);
  const navigate = useNavigate();

  // Getting Camapign Info
  useEffect(() => {
    const getSingleCampaign = async () => {
      const headers = {
        Authorization: token,
      };
      const getConfig = {
        method: "GET",
        url: `${allCampaignRoute}`,
        headers: headers,
      };
      await axios(getConfig)
        .then((res) => {
          const singleCampaign = res.data.campaigns.filter((campaign) => {
            return campaign._id === campaignId;
          });
          setCampaign(singleCampaign);
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
  }, [campaignId]);

  return (
    <ViewProgressContainer>
      {campaign.map((campaignInfo) => {
        let {
          campaignName,
          campaignPhoto,
          campaignStory,
          currentBalance,
          fundsGoal,
          _id,
        } = campaignInfo;
        const currencySymbols = ["$"];

        if (currencySymbols.includes(fundsGoal.toString().charAt(0))) {
          fundsGoal = fundsGoal.toString().slice(1);
        }

        let progress = (Number(currentBalance) / Number(fundsGoal)) * 100;
        return (
          <>
            <ViewProgressHeader key={_id}>
              <img src={ArrowLeft} alt="" onClick={() => navigate(-1)} />
              <p>Progress of {campaignName}</p>
            </ViewProgressHeader>
            <ViewProgressImage>
              <img src={campaignPhoto} alt="" />
            </ViewProgressImage>
            <ViewProgressStory>
              <p>{campaignStory}</p>
            </ViewProgressStory>
            <ViewProgressCircle>{progress}%</ViewProgressCircle>
            <ViewProgressFunds>
              <p>
                <span>{currentBalance}</span> raised out of{" "}
                <span>{fundsGoal}</span>
              </p>
            </ViewProgressFunds>
            <ViewProgressDonated>
              <ViewProgressDonatedAvatar>
                <img src={Fire} alt="" />
                <img src={Fire} alt="" />
                <img src={Fire} alt="" />
              </ViewProgressDonatedAvatar>
              <p>123+ donated</p>
            </ViewProgressDonated>
            <ViewProgressDate>
              <ViewProgressDay>3 days left</ViewProgressDay>
              <ViewProgressExtendBtn
                onClick={() => navigate(`/extendCampaign?id=${campaignId}`)}
              >
                Extend
              </ViewProgressExtendBtn>
            </ViewProgressDate>
            <ViewProgressWithdrawBtn>Withdraw</ViewProgressWithdrawBtn>
          </>
        );
      })}
    </ViewProgressContainer>
  );
};

export default ViewCampaignProgress;
