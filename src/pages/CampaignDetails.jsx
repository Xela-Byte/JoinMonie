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
import ArrowLeft from "../assets/images/arrow-right.svg";
import Flag from "../assets/images/flag.svg";
import Sick from "../assets/images/sick.jpg";
import { useNavigate } from "react-router-dom";
import Person1 from "../assets/images/person-1.jpg";
import Person2 from "../assets/images/person-2.png";
import Person3 from "../assets/images/person-3.jpg";
import Share from "../assets/images/script.svg";

const CampaignDetails = () => {
  const navigate = useNavigate();
  return (
    <CampaignDetailContainer>
      <CampaignDetailHeader>
        <img src={ArrowLeft} alt="" onClick={() => navigate(-1)} />
        <p>Details</p>
        <img src={Flag} alt="" />
      </CampaignDetailHeader>
      <CampaignDetailContent>
        <img src={Sick} alt="" />
        <p>treatment for the sick</p>
        <p>Endurance Johnson</p>
        <CampaignDetailDonate>
          <div>
            <img src={Person1} alt={"Person"} />
            <img src={Person3} alt={"Person"} />
            <img src={Person2} alt={"Person"} />
          </div>
          <p>123+ people donated</p>
        </CampaignDetailDonate>
        <CampaignDetailProgressBarContainer>
          <CampaignDetailProgressBar></CampaignDetailProgressBar>
        </CampaignDetailProgressBarContainer>
        <CampaignDetailTrackContainer>
          <CampaignDetailTrack>
            <p>$18,400</p>
            <p>Raised</p>
          </CampaignDetailTrack>
          <CampaignDetailTrack>
            <p>$23,000</p>
            <p>Goal</p>
          </CampaignDetailTrack>
          <CampaignDetailTrack>
            <p>80%</p>
            <p>Completed</p>
          </CampaignDetailTrack>
        </CampaignDetailTrackContainer>
        <CampaignDetailAboutContainer>
          <p>About Campaign</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            ducimus aliquam ea porro quibusdam repellendus corrupti modi aut
            mollitia iure deleniti nihil blanditiis, quia nulla veritatis
            exercitationem quidem, libero delectus eius voluptas animi magni.
            Unde cum fuga reiciendis voluptatem ad.
          </p>
        </CampaignDetailAboutContainer>
        <div
          style={{
            display: "flex",
            gap: "10%",
          }}
        >
          <CampaignDetailDonateBtn onClick={() => navigate("/donate")}>
            Make a donation
          </CampaignDetailDonateBtn>
          <CampaignDetailShareBtn>
            <img src={Share} alt="" />
          </CampaignDetailShareBtn>
        </div>
      </CampaignDetailContent>
    </CampaignDetailContainer>
  );
};

export default CampaignDetails;
