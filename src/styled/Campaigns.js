import styled from "styled-components";
import { Centering, colors } from "./UniversalStyles";

export const CampaignStyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px;
  @media screen and (min-width: 991px) {
    width: 70%;
    margin: auto;
  }
`;

export const CampaignsStyledHeader = styled.div`
  padding-top: 10%;
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  gap: 5%;
  color: ${colors.blue};
  & > p:first-child {
    font-size: 3vh;
  }
`;

export const ExploreNoCampaignContent = styled.div`
  width: 100%;
  height: 60%;
  ${Centering};
  flex-direction: column;
  gap: 5%;
  & > img {
    width: 50%;
    height: 50%;
  }
  & > p {
    font-size: 20px;
  }
`;

export const ExploreStartCampaignBtn = styled.div`
  width: 90%;
  padding: 10px;
  margin: auto;
  ${Centering};
  font-size: 18px;
  color: ${colors.blue};
  border-radius: 5px;
  background: rgba(7, 7, 224, 0.3);
`;
