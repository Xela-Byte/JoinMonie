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
import {
  CampaignsStyledHeader,
  CampaignStyledContainer,
  ExploreNoCampaignContent,
} from "../styled/Campaigns";
import NoCampaign from "../assets/images/warning.svg";

import { ProgressBarContainer, ProgressBar } from "../styled/Dashboard";
import { colors } from "../styled/UniversalStyles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { allCampaignRoute } from "../utils/APIRoutes";
import { useEffect } from "react";

const Explore = () => {
  document.title = "JoinMonie | Explore";

  // Hooks
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [active, setActive] = useState("");
  const [campaignCategory, setCampaignCategory] = useState("");

  // Getting Campaigns
  let token = localStorage.getItem("JoinMonie-Verify-Token");

  // Calling the function whenever window loads.
  useEffect(() => {
    const getCampaigns = async () => {
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
  }, [token]);

  const getCampaignCategory = async (category) => {
    setCampaignCategory(category);
    // Configuring Axios
    const headers = {
      Authorization: token,
    };

    const getCategoryConfig = {
      method: "POST",
      url: `${allCampaignRoute}/${category}`,
      headers: headers,
    };
    await axios(getCategoryConfig)
      .then((res) => {
        setCampaigns(res.data.campaigns);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <CategoryTab
              onClick={() => {
                getCampaignCategory("education");
                setActive("education");
              }}
              style={{
                background: active === "education" ? colors.blue : "",
                color: active === "education" ? colors.white : "",
              }}
            >
              <p>Education</p>
            </CategoryTab>
            <CategoryTab
              onClick={() => {
                getCampaignCategory("agriculture");
                setActive("agriculture");
              }}
              style={{
                background: active === "agriculture" ? colors.blue : "",
                color: active === "agriculture" ? colors.white : "",
              }}
            >
              <p>Agriculture</p>
            </CategoryTab>
            <CategoryTab
              onClick={() => {
                getCampaignCategory("commerce");
                setActive("commerce");
              }}
              style={{
                background: active === "commerce" ? colors.blue : "",
                color: active === "commerce" ? colors.white : "",
              }}
            >
              <p>Commerce</p>
            </CategoryTab>
            <CategoryTab
              onClick={() => {
                getCampaignCategory("entertainment");
                setActive("entertainment");
              }}
              style={{
                background: active === "entertainment" ? colors.blue : "",
                color: active === "entertainment" ? colors.white : "",
              }}
            >
              <p>Entertainment</p>
            </CategoryTab>
            <CategoryTab
              onClick={() => {
                getCampaignCategory("financial");
                setActive("financial");
              }}
              style={{
                background: active === "financial" ? colors.blue : "",
                color: active === "financial" ? colors.white : "",
              }}
            >
              <p>Financial</p>
            </CategoryTab>
            <CategoryTab
              onClick={() => {
                getCampaignCategory("hospitality");
                setActive("hospitality");
              }}
              style={{
                background: active === "hospitality" ? colors.blue : "",
                color: active === "hospitality" ? colors.white : "",
              }}
            >
              <p>Hospitality</p>
            </CategoryTab>
            <CategoryTab
              onClick={() => {
                getCampaignCategory("health");
                setActive("health");
              }}
              style={{
                background: active === "health" ? colors.blue : "",
                color: active === "health" ? colors.white : "",
              }}
            >
              <p>Health</p>
            </CategoryTab>
            <CategoryTab
              onClick={() => {
                getCampaignCategory("leisure");
                setActive("leisure");
              }}
              style={{
                background: active === "leisure" ? colors.blue : "",
                color: active === "leisure" ? colors.white : "",
              }}
            >
              <p>Leisure</p>
            </CategoryTab>
            <CategoryTab
              onClick={() => {
                getCampaignCategory("logistics");
                setActive("logistics");
              }}
              style={{
                background: active === "logistics" ? colors.blue : "",
                color: active === "logistics" ? colors.white : "",
              }}
            >
              <p>Logistics</p>
            </CategoryTab>
            <CategoryTab
              onClick={() => {
                getCampaignCategory("non_profits");
                setActive("non_profits");
              }}
              style={{
                background: active === "non_profits" ? colors.blue : "",
                color: active === "non_profits" ? colors.white : "",
              }}
            >
              <p>Non Profits</p>
            </CategoryTab>
            <CategoryTab
              onClick={() => {
                getCampaignCategory("travel");
                setActive("travel");
              }}
              style={{
                background: active === "travel" ? colors.blue : "",
                color: active === "travel" ? colors.white : "",
              }}
            >
              <p>Travel</p>
            </CategoryTab>
            <CategoryTab
              onClick={() => {
                getCampaignCategory("utilities");
                setActive("utilities");
              }}
              style={{
                background: active === "utilities" ? colors.blue : "",
                color: active === "utilities" ? colors.white : "",
              }}
            >
              <p>Utilities</p>
            </CategoryTab>
          </CategoryTabContent>
        </CategoryTabContainer>
        <ExploreCampaignWrapper>
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
            {campaigns.length === 0 && (
              <CampaignStyledContainer>
                <CampaignsStyledHeader>
                  <p>
                    No campaign under category{" "}
                    <span
                      style={{
                        textTransform: "capitalize",
                      }}
                    >
                      {" "}
                      {campaignCategory === "non_profits"
                        ? "non profits"
                        : campaignCategory}
                    </span>
                  </p>
                </CampaignsStyledHeader>
                <ExploreNoCampaignContent>
                  <img src={NoCampaign} alt="" />
                </ExploreNoCampaignContent>
              </CampaignStyledContainer>
            )}
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
