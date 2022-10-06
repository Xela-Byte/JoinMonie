import {
  CampaignStarter,
  CampaignStarterBtn,
  CampaignStarterContent,
  DashboardContainer,
  DashboardHeader,
  DashboardLogoContainer,
  DashboardNotify,
  DashboardSearch,
  DashboardSearchContainer,
  ProgressBar,
  ProgressBarContainer,
  TrendingCampaignContainer,
  TrendingCampaignContent,
  TrendingCampaignInfo,
  TrendingCampaignTab,
} from "../styled/Dashboard";
import Menu from "../assets/images/menu.svg";
import Logo from "../assets/images/logo.png";
import Bell from "../assets/images/bell.svg";
import Search from "../assets/images/search.svg";
import Hands from "../assets/images/hands.jpg";
import { TrendingCampaign } from "../utils/TrendingCampaigns";
import FooterNav from "../components/FooterNav";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  document.title = "JoinMonie | Dashboard";
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      {showNavbar && <Navbar />}
      <DashboardContainer>
        <DashboardHeader>
          <img src={Menu} alt="" onClick={() => handleShowNavbar()} />
          <DashboardLogoContainer>
            <img src={Logo} alt="" />
            <p>JoinMonie</p>
          </DashboardLogoContainer>
          <DashboardNotify onClick={() => navigate("/notifications")}>
            <img src={Bell} alt="" />
          </DashboardNotify>
        </DashboardHeader>
        <DashboardSearchContainer>
          <img src={Search} alt="" />
          <DashboardSearch type={"text"} placeholder="Search Campaigns" />
        </DashboardSearchContainer>
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
          <div
            style={{
              display: "flex",
              gap: "25%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>Trending Campaigns</p>
            <span>View all</span>
          </div>
          {TrendingCampaign.map((campaign) => {
            const {
              id,
              campaignImage,
              campaignDesc,
              campaignPatientName,
              amountFunded,
              totalAmount,
            } = campaign;

            let progress = (amountFunded / totalAmount) * 100;

            return (
              <TrendingCampaignTab
                key={id}
                onClick={() => navigate("/campaign-details")}
              >
                <img src={campaignImage} alt="" />
                <TrendingCampaignContent>
                  <p>{campaignDesc}</p>
                  <p>{campaignPatientName}</p>
                  <ProgressBarContainer>
                    <ProgressBar style={{ width: `${progress}%` }} />
                  </ProgressBarContainer>
                  <TrendingCampaignInfo>
                    <p>
                      ${amountFunded} / ${totalAmount}
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
