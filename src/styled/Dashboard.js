import styled from "styled-components";
import { Centering, colors, fontSizes } from "../styled/UniversalStyles";

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.white};
  min-height: fit-content;
  padding: 5%;
  overflow: scroll;
`;

export const DashboardHeader = styled.div`
  width: 100%;
  height: 10%;
  ${Centering}
  margin-top: 10%;
  justify-content: space-around;
  & > img {
    width: 30px;
    height: 30px;
  }
  @media screen and (min-width: 991px) {
    margin-top: 0%;
  }
`;

export const DashboardLogoContainer = styled.div`
  height: 100%;
  width: 40%;
  gap: 5%;
  ${Centering}
  & > img {
    width: 30px;
    height: 30px;
  }
  & > p {
    font-size: 18px;
    color: ${colors.blue};
    font-weight: 600;
  }
`;

export const DashboardNotify = styled.div`
  width: fit-content;
  background: #eee;
  padding: 5px;
  border-radius: 5px;
  & > img {
    width: 30px;
    height: 30px;
  }
`;

export const DashboardSearchContainer = styled.div`
  width: 100%;
  padding-top: 5%;
  padding-bottom: 10%;
  ${Centering}
  position: relative;
  & > img {
    width: 25px;
    height: 25px;
    position: absolute;
    left: 10%;
  }
  @media screen and (min-width: 991px) {
    width: 85%;
    margin: auto;
    padding-top: 2%;
    padding-bottom: 5%;
  }
`;

export const DashboardSearch = styled.input`
  width: 95%;
  padding: 1rem;
  padding-left: 15%;
  outline: none;
  border: none;
  font-size: 16px;
  border-radius: 15px;
  box-shadow: -5px 5px 10px #c5c5c5, 10px -10px 17px #fbfbfb;
  &::placeholder {
    color: ${colors.blue};
  }
`;

export const CampaignStarter = styled.div`
  width: 100%;
  height: 25%;
  overflow: hidden;
  position: relative;
  background: black;
  border-radius: 10px;
  box-shadow: -5px 5px 10px #c5c5c5, 10px -10px 17px #fbfbfb;
  & > img {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.6;
  }
  @media screen and (max-height: 610px) {
    height: 35%;
  }
  @media screen and (min-width: 991px) {
    width: 80%;
    margin: auto;
    height: 60%;
  }
`;

export const CampaignStarterContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 5%;
  z-index: 4;
  & > p {
    color: ${colors.white};
    font-size: 16px;
    font-weight: 600;
  }
  @media screen and (min-width: 991px) {
    margin-top: 2%;
    & > p {
      font-size: 4vh;
    }
  }
`;

export const CampaignStarterBtn = styled.div`
  width: 60%;
  text-align: center;
  padding: 10px;
  color: ${colors.blue};
  border-radius: 10px;
  margin-top: 5%;
  cursor: pointer;
  background: ${colors.white};
  @media screen and (min-width: 991px) {
    width: 20%;
  }
`;

export const TrendingCampaignContainer = styled.div`
  width: 100%;
  height: 70%;
  overflow: scroll;
  margin-top: 5%;
  margin-bottom: 25%;
  & > div > p {
    font-weight: 600;
  }
  & > div > span {
    color: ${colors.blue};
    font-size: 14px;
  }
  @media screen and (max-height: 610px) {
    height: 100%;
  }
  @media screen and (min-width: 991px) {
    width: 80%;
    margin: auto;
    margin-top: 5%;
    height: 100%;
    padding: 10px;
    &::-webkit-scrollbar {
      width: 8px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      width: 8px;
      border-radius: 10px;
      background: #eee;
    }
    & > div > p {
      margin-right: auto;
    }
    & > div > span {
      margin-left: auto;
    }
  }
`;
export const TrendingCampaignTab = styled.div`
  box-shadow: -5px 5px 10px #c5c5c5, 10px -10px 17px #fbfbfb;
  width: 100%;
  margin-top: 5%;
  border-radius: 10px;
  height: 70%;
  cursor: pointer;
  & > img {
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    height: 45%;
    object-fit: cover;
  }
  @media screen and (min-width: 991px) {
    height: auto;
    & > img {
      height: 65%;
    }
  }
`;

export const TrendingCampaignContent = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5%;
  & > p {
    text-transform: uppercase;
    font-size: ${fontSizes.medium};
    font-weight: 700;
    color: ${colors.blue};
  }
  & > p:nth-child(2) {
    text-transform: capitalize;
    font-size: ${fontSizes.small};
    color: ${colors.black};
  }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  min-height: 0.5rem;
  background: #eee;
  border-radius: 10px;
`;

export const ProgressBar = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 10px;
  background: ${colors.blue};
`;

export const TrendingCampaignInfo = styled.div`
  width: 100%;
  display: flex;
  & > p {
    color: ${colors.black};
  }
  & > p:nth-child(2) {
    margin-left: auto;
    color: ${colors.blue};
  }
`;
