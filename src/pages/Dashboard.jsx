import {
  CampaignStarter,
  CampaignStarterBtn,
  CampaignStarterContent,
  DashboardContainer,
  DashboardHeader,
  DashboardLogoContainer,
  DashboardNotify,
  ProgressBar,
  ProgressBarContainer,
  TrendingCampaignContainer,
  TrendingCampaignContent,
  TrendingCampaignInfo,
  TrendingCampaignTab,
} from "../styled/Dashboard";
import Menu from "../assets/images/menu.png";
import Logo from "../assets/images/logo.svg";
import Bell from "../assets/images/bell.png";
import Hands from "../assets/images/hands.jpg";
import FooterNav from "../components/FooterNav";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { allCampaignRoute } from "../utils/APIRoutes";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const Dashboard = () => {
  document.title = "JoinMonie | Dashboard";
  const [showNavbar, setShowNavbar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  let token = localStorage.getItem("JoinMonie-Verify-Token");

  // Calling the function whenever window loads.
  useEffect(() => {
    const getCampaigns = async () => {
      setLoading(true);
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

  const trendingCampaigns = campaigns.filter((_, index) => {
    const notTrending = [0, 1, 2, 3, 4, 5];
    return !notTrending.includes(index);
  });

  return (
    <>
      {showNavbar && <Navbar />}
      <DashboardContainer>
        <DashboardHeader>
          <img src={Menu} alt="" onClick={() => handleShowNavbar()} />
          <DashboardLogoContainer>
            <img src={Logo} alt="" />
          </DashboardLogoContainer>
          <DashboardNotify onClick={() => navigate("/notifications")}>
            <img src={Bell} alt="" />
          </DashboardNotify>
        </DashboardHeader>

        <CampaignStarter>
          <img src={Hands} alt="" />
          <CampaignStarterContent>
            <p>Do you have a very creative idea that needs funding?</p>
            <CampaignStarterBtn onClick={() => navigate("/create-campaign")}>
              Start Campaign
            </CampaignStarterBtn>
          </CampaignStarterContent>
        </CampaignStarter>
        <TrendingCampaignContainer>
          {loading && <Loading />}
          <div
            style={{
              display: "flex",
              gap: "25%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>Trending Campaigns</p>
            <Link to={"/explore"}>View all</Link>
          </div>
          {trendingCampaigns.map((campaign) => {
            let {
              _id,
              campaignPhoto,
              email,
              currentBalance,
              fundsGoal,
              campaignName,
            } = campaign;

            const currencySymbols = ["$"];

            if (currencySymbols.includes(fundsGoal.toString().charAt(0))) {
              fundsGoal = fundsGoal.toString().slice(1);
            }

            let progress = (Number(currentBalance) / Number(fundsGoal)) * 100;

            return (
              <TrendingCampaignTab
                key={_id}
                onClick={() => navigate("/campaign-details")}
              >
                <img src={campaignPhoto} alt="" />
                <TrendingCampaignContent>
                  <p>{campaignName}</p>
                  <p>{email}</p>
                  <ProgressBarContainer>
                    <ProgressBar style={{ width: `${progress}%` }} />
                  </ProgressBarContainer>
                  <TrendingCampaignInfo>
                    <p>
                      ${currentBalance} / ${fundsGoal}
                    </p>
                    <p>{progress}%</p>
                  </TrendingCampaignInfo>
                </TrendingCampaignContent>
              </TrendingCampaignTab>
            );
          })}
        </TrendingCampaignContainer>
      </DashboardContainer>
      <FooterNav />
    </>
  );
};

export default Dashboard;
