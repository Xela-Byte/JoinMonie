import styled from "styled-components";

import { Centering, colors } from "./UniversalStyles";

export const CampaignDetailContainer = styled.div`
  width: 100%;
  padding-bottom: 10%;
  height: 100%;
  padding-top: 10%;
  padding-left: 15px;
  padding-right: 15px;
`;

export const CampaignDetailHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 30%;
  margin-bottom: 5%;
  & > p {
    text-align: center;
    font-size: 20px;
    margin-bottom: 10%;
    color: ${colors.blue};
  }
  & > img {
    width: 25px;
    height: 25px;
    transform: rotate(180deg);
    margin-bottom: 2%;
  }
  & > img:last-child {
    width: 25px;
    height: 25px;
    transform: rotate(0deg);
    margin-bottom: 2%;
  }
`;

export const CampaignDetailContent = styled.div`
  width: 100%;
  & > img {
    width: 100%;
    height: 20%;
    border-radius: 10px;
    object-fit: cover;
  }
  & > p:nth-child(2) {
    margin-top: 10px;
    font-weight: 600;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 10px;
    text-transform: uppercase;
    color: ${colors.blue};
  }
  & > p:nth-child(3) {
    font-size: 14px;
    color: ${colors.grey};
    margin-bottom: 10px;
    font-weight: 600;
  }
`;

export const CampaignDetailDonate = styled.div`
  width: 100%;
  height: 10%;
  margin-bottom: 10px;
  display: flex;
  gap: 15px;
  align-items: center;
  & > p {
    font-size: 14px;
  }
  & > div {
    display: flex;
    & > img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      object-fit: cover;
    }
    & > img:nth-child(2),
    & > img:nth-child(3) {
      margin-left: -15px;
    }
  }
`;
export const CampaignDetailProgressBarContainer = styled.div`
  width: 100%;
  height: 0.5rem;
  margin-top: 5%;
  margin-bottom: 5%;
  background: #eee;
  border-radius: 10px;
`;

export const CampaignDetailProgressBar = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 10px;
  background: ${colors.blue};
`;

export const CampaignDetailTrackContainer = styled.div`
  width: 100%;
  display: flex;
  height: 10%;
  gap: 7%;
`;

export const CampaignDetailTrack = styled.div`
  width: 30%;
  height: 100%;
  & > p {
    font-size: 14px;
    text-align: center;
  }
  & > p:last-child {
    color: ${colors.blue};
  }
`;

export const CampaignDetailAboutContainer = styled.div`
  width: 100%;
  height: 40%;
  margin-top: 10%;
  margin-bottom: 10%;
  & > p:first-child {
    color: ${colors.blue};
    font-size: 16px;
  }
  & > p:last-child {
    font-size: 14px;
  }
`;

export const CampaignDetailDonateBtn = styled.div`
  width: 70%;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  background: ${colors.blue};
  padding: 10px;
  ${Centering}
  text-align: center;
  font-size: 16px;
  border-radius: 10px;
`;

export const CampaignDetailShareBtn = styled.div`
  width: 15%;
  background: rgba(7, 7, 224, 0.15);
  border-radius: 10px;
  padding: 15px;
`;
